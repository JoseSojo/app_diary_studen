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
	}


 ?>