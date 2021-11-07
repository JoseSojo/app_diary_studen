<?php 

	include('../db/db.php.dist');
	if (isset($_POST['idNoti'])) {

		$query = $DB->prepare('DELETE FROM diary WHERE id = :id');
		$query->execute(
			array(
				':id' => $_POST['idNoti']
			)
		);
		echo 'Nota Eliminada';


		/*
		 * Space save to table history
		 *
		 *
		*/
		$requets = 'Eliminaste una Nota';
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