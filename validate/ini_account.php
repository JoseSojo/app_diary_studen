<?php 
	include('../db/db.php.dist');
	if (isset($_POST['ini-data'])) {

		$name = $_POST['ini-name'];
		$surname = $_POST['ini-surname'];

		$prepare = $DB->prepare("INSERT INTO studen VALUES(null,:name,:surname)");
		$prepare->execute(
			array(
				':name' => $name,
				':surname' => $surname
			)
		);

		session_start();
		$session = $_SESSION['user'] = $name . ' ' . $surname;

		header('location: ../public/user.php');

	} else{
		header('location: ../public/ini.php');
	}

 ?>