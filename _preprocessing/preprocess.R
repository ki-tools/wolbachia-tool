# this file preprocesses the gpkg files into a single list of data frames
# which is loaded by the shiny app
# the names of the list are the country IDs (e.g. BF, BRA, COL, etc.)
library(dplyr)
library(sf)
library(rmapshaper)
library(geojsonio)

req_vars <- c(
  "name", # name of the admin 2 area (district, division, etc)
  "gaul_code", # admin 2 unique code
  "totpop", # total population in the admin 2 geography
  "targetpop", # target population in the admin 2 geography
  "totdenm", # mean dengue incidence in the admin 2 geography
  "totalarea", # total area of admin 2 geography in squared kilometers
  "targetarea", # targeted area of admin 2 geography in squared kilometers
  "country_id" # three letter country ID
)
# these are ignored:
# [1] "admin_leve" "gaul_num"   "pf_endemic" "pv_endemic"
# [5] "shape_area" "shape_leng"

if (!dir.exists("public/data")) {
  dir.create("public/data")
}

fix_numeric <- function(x) {
  x[x == "<Null>"] <- NA
  as.numeric(x)
}

process <- function(dir, subdir) {
  message(subdir)
  if (!dir.exists(file.path("public/data", dir, subdir))) {
    dir.create(file.path("public/data", dir, subdir),
      recursive = TRUE
    )
  }

  shp_path <- file.path("_preprocessing/data", dir, subdir)
  shp <- sf::read_sf(shp_path) %>%
    rename_all(tolower)

  dat <- shp %>%
    select(all_of(c(req_vars, "geometry")))
  dat

  dat <- dat %>%
    mutate(across(c(
      "totalarea", "targetarea", "totpop", "targetpop", "totdenm"
    ), fix_numeric))

  ds <- split(dat, dat$country_id)

  for (nm in names(ds)) {
    res <- ms_simplify(ds[[nm]], keep = 0.5)
    a <- geojson_json(res)
    b <- geo2topo(a)
    cat(b, file = file.path("public/data", dir, subdir, paste0(nm, ".topojson")))
    # saveRDS(res, file = file.path("public/data", pop, paste0(nm, ".rds")))
  }
}

process("POPDEN", "250")
process("POPDEN", "500")
process("POPDEN", "1000")
process("POPDEN", "1500")

process("DISRED", "125")
process("DISRED", "250")

# ------------------- country metadata ------------------- #

library(readxl)

keep <- c(
  "iso_3", "country", "daly_per_case", "direct_ambu",
  "direct_hosp", "direct_non_medical", "indirect_ambu", "indirect_hosp",
  "indirect_non_medical", "percent_ambu", "percent_hosp",
  "percent_non_medical"
)

meta <- read_xlsx("_preprocessing/country_meta.xlsx") %>%
  rename_all(tolower) %>%
  select(all_of(keep)) %>%
  arrange(country)

# countries where everything is missing:
idx <- which(apply(meta, 1, function(x) length(which(is.na(x)))) > 0) # >= 9
meta <- meta[-idx, ]

# add in info about what countries have what data
ff <- list.files("public/data/POPDEN", full.names = TRUE)
pd <- lapply(ff, function(f) {
  tibble(
    par = basename(f),
    code = tools::file_path_sans_ext(list.files(f))
  )
}) %>% bind_rows()
ff <- list.files("public/data/DISRED", full.names = TRUE)
dr <- lapply(ff, function(f) {
  tibble(
    par = basename(f),
    code = tools::file_path_sans_ext(list.files(f))
  )
}) %>% bind_rows()

meta <- filter(meta, iso_3 %in% unique(c(pd$code, dr$code)))

country_meta <- meta %>%
  split(meta$iso_3) %>%
  lapply(as.list)

for (ctry in names(country_meta)) {
  country_meta[[ctry]]$data <- list(
    POPDEN = filter(pd, code == ctry) %>% pull(par) %>% I(),
    DISRED = filter(dr, code == ctry) %>% pull(par) %>% I()
  )
}

jsonlite::write_json(country_meta, "public/data/countryMeta.json",
  auto_unbox = TRUE
)
