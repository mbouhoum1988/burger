drop database if exists burger_db;
create database burger_db;

use burger_db;

CREATE TABLE burgers
 (
   id INT AUTO_INCREMENT,
   burger_name VARCHAR(255),
   devoured boolean default false,
   PRIMARY KEY (id)
);