CREATE DATABASE sushi_db;
USE sushi_db;

CREATE table sushi 
(
	id INT AUTO_INCREMENT NOT NULL,
	sushi_name VARCHAR(255),
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id) 
);