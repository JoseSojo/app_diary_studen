<?php 
	
	include('../db/db.php.dist');
	// DATO RECIVIDO
	$search = $_POST['search'];

	if (!empty($search)) {

		$query = "SELECT * FROM diary WHERE title LIKE '$search%'";
		$result = mysqli_query($DBi, $query);
		if (!$result) {
			die('Ah ocurrido un error');
		}

		$json = array();
		while ($row = mysqli_fetch_array($result)) {
			$json[] = array(
				'title' => $row['title']
			);
		}
		$json_string = json_encode($json);
		echo $json_string;

		/*
		 * Space save to table history
		 *
		 *
		*/
		$requets = 'Buscastes una nota';
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