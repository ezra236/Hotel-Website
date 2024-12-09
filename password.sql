-- Create the database
CREATE DATABASE UserCredentials;

-- Use the database
USE UserCredentials;

-- Create the table
CREATE TABLE Credentials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- Insert the usernames and passwords
INSERT INTO Credentials (username, password) VALUES
('Reception', '123qw'),
('Arungai59', '123own');
