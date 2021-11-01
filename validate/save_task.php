<?php 

	include('../db/db.php.dist');
	if (isset($_POST['title']) && isset($_POST['descript'])) {

		$title = htmlspecialchars(trim($_POST['title']));
		$descript = htmlspecialchars(trim($_POST['descript']));

		$query = $DB->prepare('INSERT INTO task VALUES(
			null,
			:title,
			:descript
		)');
		$query->execute(
			array(
				':title' => $title,
				':descript' => $descript
			)
		);
		echo 'Tara Guardada Correctamente';
	}

 ?>