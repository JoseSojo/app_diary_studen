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

		/*
		 * Space save to table history
		 *
		 *
		*/
		$requets = 'Añadiste una asignatura';
		$date_save = date('d/m/y');
		$save_history = $DB->prepare('INSERT INTO history VALUES(
			null,
			:descritp,
			:date_save
		)');
		$save_history->execute(
			array(
				':descritp' => $requets,
				':date_save' => $date_save
			)
		);
	}
 ?>