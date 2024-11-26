-- Create the database
CREATE DATABASE BookingDB;

-- Use the database
USE BookingDB;

-- Create the table
CREATE TABLE BookingDetails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant VARCHAR(255) NOT NULL,
    title VARCHAR(50) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    date DATE NOT NULL
);
