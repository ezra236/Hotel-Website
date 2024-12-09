-- Create the database
CREATE DATABASE PasswordStore;

-- Use the newly created database
USE PasswordStore;

-- Create a table to store the passwords
CREATE TABLE Passwords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    password_name VARCHAR(50) NOT NULL,
    password_value VARCHAR(255) NOT NULL
);

-- Insert the passwords
INSERT INTO Passwords (password_name, password_value)
VALUES 
('password1', '123qw'),
('password2', '123own');
