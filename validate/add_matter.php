<?php 
	
	include('../db/db.php.dist');

	if (isset($_POST['matter'])) {
		$matter = $_POST['matter'];
		$query = $DB->prepare('INSERT INTO matter VALUES(
				null,
				:matter
			)'
		);
		$query->execute(
			array(
				':matter' => $matter
			)
		);
		echo $matter . ' Agregada correctamente';
	}

 ?>