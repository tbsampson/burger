CREATE DATABASE IF NOT EXISTS  burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);