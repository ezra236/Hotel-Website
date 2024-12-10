CREATE DATABASE primeemails;

USE primeemails;

CREATE TABLE subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Example query to insert an email
INSERT INTO subscribers (email) VALUES ('example@example.com');
