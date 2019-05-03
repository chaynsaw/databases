DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   msg VARCHAR(255),
--   room_id 
-- );

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS `rooms`;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(15),
  PRIMARY KEY (`id`),
  KEY (`username`, `id`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
		
CREATE TABLE `messages` (
  `id` INTEGER AUTO_INCREMENT,
  `text` VARCHAR(255),
  `roomname` VARCHAR(40),
  `user_id` INTEGER(25),
);
  PRIMARY KEY (`id`)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

