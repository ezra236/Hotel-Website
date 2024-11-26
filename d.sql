CREATE DATABASE reservation_system;

USE reservation_system;

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(10),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    phone VARCHAR(20),
    offer VARCHAR(50),
    check_in DATE,
    adults INT,
    children INT,
    comments TEXT,
    special_offers BOOLEAN
);
