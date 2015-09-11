CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer unsigned NOT NULL auto_increment,
  name varchar(30),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer unsigned NOT NULL auto_increment,
  username varchar(30),
  body text,
  roomname varchar(40),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

