CREATE DATABASE IF NOT EXISTS UserFormDB;

USE UserFormDB;

CREATE TABLE UserDetails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    payment_code VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(100) NOT NULL
);
