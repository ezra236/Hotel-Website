-- Create a new database
CREATE DATABASE IF NOT EXISTS NewUserBookingDB;

-- Use the new database
USE NewUserBookingDB;

-- Create the table with the same structure as UserBookingDetails
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
    check_out DATE,            -- Column to store the check-out date
    Added_Room VARCHAR(50),    -- Column to store the added room value
    Availability TEXT,         -- Column to store availability status
    Room_Number TEXT           -- Column to store room number
);

-- You can also add additional commands to modify or manipulate the new table structure if needed
