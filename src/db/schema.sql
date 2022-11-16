DROP DATABASE IF EXISTS cities_db;

CREATE DATABASE cities_db;

INSERT INTO
    maps (
        city_name,
        city_state,
        map_coordinates_lat,
        map_coordinates_lon
    )
VALUES (
        "DEFAULT",
        "DEFAULT",
        "31.1957",
        "-98.7181"
    )
INSERT INTO
    maps (
        city_name,
        city_state,
        map_coordinates_lat,
        map_coordinates_lon
    )
VALUES (
        "Austin",
        "TX",
        "30.2672",
        "-97.7431"
    )
INSERT INTO
    maps (
        city_name,
        city_state,
        map_coordinates_lat,
        map_coordinates_lon
    )
VALUES (
        "Houston",
        "TX",
        "29.7604",
        "-95.3698"
    )
INSERT INTO
    maps (
        city_name,
        city_state,
        map_coordinates_lat,
        map_coordinates_lon
    )
VALUES (
        "Dallas",
        "TX",
        "32.7767",
        "-96.7970"
    )