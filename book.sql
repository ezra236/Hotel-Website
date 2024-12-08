CREATE DATABASE IF NOT EXISTS UserBookingDB;

USE UserBookingDB;

CREATE TABLE UserBookingDetails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    payment_code VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(100) NOT NULL,
    first_part TEXT NOT NULL,  -- This column stores the first part (all lines except the last)
    last_line TEXT NOT NULL,   -- This column stores the last line
    button VARCHAR(20),        -- Column to store the button value
    random_number INT,         -- Column to store the random number
    check_in DATE,             -- Column to store the check-in date
    check_out DATE             -- Column to store the check-out date
);


ALTER TABLE UserBookingDetails
ADD COLUMN Added_Room VARCHAR(50) AFTER last_line;

ALTER TABLE UserBookingDetails MODIFY COLUMN Added_Room TEXT;

ALTER TABLE UserBookingDetails 
ADD COLUMN Availability TEXT AFTER Added_Room;

ALTER TABLE UserBookingDetails DROP COLUMN Added_Room;


