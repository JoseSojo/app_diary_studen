<?php 

	include('../db/db.php.dist');
	if (isset($_POST['idTask'])) {

		$query = $DB->prepare('DELETE FROM task WHERE id = :id');
		$query->execute(
			array(
				':id' => $_POST['idTask']
			)
		);


		echo 'Tarea Eliminada';
	}


 ?>