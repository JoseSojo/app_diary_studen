<?php 

	include('../db/db.php.dist');

	if (isset($_GET['nameTable'])) {
		$table = $_GET['nameTable'];
		$query = $DB->prepare("SELECT diary_studen TRUNCATE` data `");
		$query->execute();
		echo 'Tabla vaciada';
	}




 ?>