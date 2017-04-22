CREATE DATABASE Hot_Restaurant_DB;

CREATE TABLE reservations(
	id int AUTO_INCREMENT NOT NULL,
    name varchar(100) NOT NULL,
    phone_number integer(10) NOT NULL,
    email varchar(100) NOT NULL,
    unique_id varchar(100) NOT NULL,
    PRIMARY KEY (id)
);