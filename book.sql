CREATE DATABASE Booked;

USE Booked;

CREATE TABLE Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_part TEXT NOT NULL,  -- This column stores the first part (all lines except the last)
    last_line TEXT NOT NULL    -- This column stores the last line
);
