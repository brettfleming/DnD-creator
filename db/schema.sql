DROP DATABASE IF EXISTS dnd_db;
CREATE DATABASE dnd_db;
USE dnd_db;

CREATE TABLE user (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(30) NOT NULL,
    user_email VARCHAR(10) NOT NULL,
    user_pword VARCHAR(30) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE comment (
	comment_id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL REFERENCES user(user_id),
	comment_body VARCHAR(100) NOT NULL,
	character_id INT NOT NULL REFERENCES characters(character_id),
	PRIMARY KEY (comment_id)
);

CREATE TABLE character (
	character_id INT NOT NULL AUTO_INCREMENT,
	character_name VARCHAR(10) NOT NULL,
	character_background VARCHAR(20) NULL,
	character_race VARCHAR(20) NOT NULL,
    character_alignment VARCHAR(20) NOT NULL,
    character_class VARCHAR(20) NOT NULL,
    character_strength INT NOT NULL,
    character_dexterity INT NOT NULL,
    character_charisma INT NOT NULL,
    character_constitution INT NOT NULL,
    character_intelligence INT NOT NULL,
    character_wisdom INT NOT NULL,
    user_ID INT NOT NULL REFERENCES user(user_id),
    PRIMARY KEY (character_id)
);
