CREATE DATABASE bcip300login;

--set extension
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_access VARCHAR(255) NOT NULL
);

CREATE TABLE users2(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--insert users

INSERT INTO users (user_name, user_email, user_password, user_access) VALUES ('Aditya', 'aditya19june2001@gmail.com', 'Aditya19', 'Admin');
INSERT INTO users2 (user_name, user_email, user_password) VALUES ('Aditya', 'aditya19june2001@gmail.com', 'Aditya19');