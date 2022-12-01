# this file preprocesses the gpkg files into a single list of data frames
# which is loaded by the shiny app
# the names of the list are the country IDs (e.g. BF, BRA, COL, etc.)
library(dplyr)
library(sf)
library(rmapshaper)
library(geojsonio)

req_vars <- c(
  "gaul_code", # admin 2 unique code
  "country_id", # three letter country ID
  "name", # name of the admin 2 area (district, division, etc)
  "areasqkm", # total area of admin 2 geography in squared kilometers
  "areatsqkm", # targeted area of admin 2 geography in squared kilometers
  "totpop", # total population in the admin 2 geography
  "tarpop", # target population in the admin 2 geography
  "totdeng" # mean dengue incidence in the admin 2 geography
  # "tardeng" # mean dengue incidence in target area of admin2 geo
)

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
    dplyr::rename_all(tolower)

  idx <- which(names(shp) == "area_sqkm")
  if (length(idx) == 1) {
    names(shp)[idx] <- "areasqkm"
  }

  dat <- shp %>%
    select(all_of(c(req_vars, "geometry")))
  dat

  dat <- dat %>%
    mutate(across(c(
      "areasqkm", "areatsqkm", "totpop", "tarpop",
      "totdeng"
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

process("0")
process("250")
process("500")
process("750")
process("1000")
