<?php
	try{
		$dbh = new PDO('mysql:host=localhost;dbname=baseajax','root','');
		$dbh -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);

	}catch(PDOException $e){
		echo "Connexion impossible. Message error:" .$e;
		
	}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		if (!empty($_POST)) {
			$req = $dbh->prepare("INSERT INTO modele_voiture(marque, modele, annee, couleur, image)VALUES(:marque, :modele, :annee, :couleur, image)");


			$req->bindParam(':marque', $_POST['marque']);
			$req->bindParam(':modele', $_POST['modele']);
			$req->bindParam(':annee', $_POST['annee']);
			$req->bindParam(':couleur', $_POST['couleur']);
			$req->bindParam(':image', $_POST['url']);
		}


	
}





?>