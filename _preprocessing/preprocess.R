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

process <- function(pop) {
  message(pop)
  if (!dir.exists(file.path("public/data", pop))) {
    dir.create(file.path("public/data", pop))
  }

  shp_path <- file.path("_preprocessing/data", pop)
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
    cat(b, file = file.path("public/data", pop, paste0(nm, ".topojson")))
    # saveRDS(res, file = file.path("public/data", pop, paste0(nm, ".rds")))
  }
}

process("250")
process("500")
process("1000")
process("1500")

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
  select(all_of(keep))

country_meta <- meta %>%
  split(meta$iso_3) %>%
  lapply(as.list)

jsonlite::write_json(country_meta, "public/data/countryMeta.json",
  auto_unbox = TRUE
)

# country_meta <- list(
#   BGD = list(country = "Bangladesh"),
#   BRA = list(country = "Brazil"),
#   COL = list(country = "Columbia"),
#   IDN = list(country = "Indonesia"),
#   LKA = list(country = "Sri Lanka"),
#   MEX = list(country = "Mexico"),
#   NGA = list(country = "Nigeria"),
#   VNM = list(country = "Vietnam")
# )
