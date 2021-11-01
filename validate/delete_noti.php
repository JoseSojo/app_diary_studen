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
	}


 ?>