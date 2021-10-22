CREATE TABLE "users" (
user_id SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
  	user_email VARCHAR (50),
  	user_password VARCHAR (50)
);

CREATE TABLE "kennel" (
kennel_id SERIAL PRIMARY KEY,
 	name VARCHAR(50),
	location VARCHAR(50)
);

CREATE TABLE user_kennel (
	id SERIAL PRIMARY KEY,
	user_id INTEGER NOT NULL REFERENCES users(user_id),
	kennel_id INTEGER NOT NULL REFERENCES kennel(kennel_id)
); 

CREATE TABLE "animals" (
animal_id SERIAL PRIMARY KEY,
name VARCHAR(50),
kennel_id INTEGER NOT NULL REFERENCES kennel(kennel_id),
gender VARCHAR(1),
microchip VARCHAR(15),
profile_image VARCHAR(100),
images_folder VARCHAR(100),
birth_date DATE,
markings VARCHAR(255),
birth_weight VARCHAR(50)
);