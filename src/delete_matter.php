<?php 

	include('../db/db.php.dist');
	if (isset($_POST['idMatter'])) {

		$query = $DB->prepare('DELETE FROM matter WHERE id = :id');
		$query->execute(
			array(
				':id' => $_POST['idMatter']
			)
		);
		echo 'Asignatura Eliminada';

		/*
		 * Space save to table history
		 *
		 *
		*/
		$requets = 'Eliminastes una asignatura';
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