CREATE DATABASE IF NOT EXISTS MikeMonRoi;

USE MikeMonRoi;
CREATE TABLE modele_voiture(

id_car INT(3) NOT NULL AUTO_INCREMENT,
marque VARCHAR(20) NOT NULL,
modele VARCHAR(20) NOT NULL,
annee YEAR NOT NULL,
couleur ENUM('black','white','blue','mike'),
image VARCHAR(250) NULL,
PRIMARY KEY(id_car)
) ENGINE=InnoDB;