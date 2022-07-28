CREATE TABLE todo (
	todo_id SERIAL PRIMARY KEY,
	description VARCHAR
);

CREATE TABLE techstack (
	user_id uuid DEFAULT uuid_generate_v4(),
	tech_stack VARCHAR(255) NOT NULL UNIQUE,
	PRIMARY KEY(user_id)
);





CREATE DATABASE authtodo;

CREATE TABLE users (
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(1023) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE todo(
  todo_id SERIAL,
  user_id UUID ,
  description VARCHAR(255),
  PRIMARY KEY (todo_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henryly213@gmail.com', 'kthl8822');











