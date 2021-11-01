<?php 

	include('../db/db.php.dist');

	if(isset($_POST['name'])){
		$delete = $DB->prepare("TRUNCATE ` data `");
		$delete->execute();

		$name = $_POST['name'] . ' ' . $_POST['surname'];
		$univ_race = $_POST['univRace'];
		$univ = $_POST['univ'];
		$univ_duration = $_POST['univDuration'];
		$admin_age = $_POST['adminAge'];
		$admin_year = $_POST['adminYear'];

		$query = $DB->prepare("INSERT INTO data (
				id,name,race,univ,year_race,year_admision,age_admision
			) VALUES(
				null,:name,:race,:univ,:univ_duration,:admin_year,:admin_age
			)
		");
		$query->execute(
			array(
				':name' => $name,
				':race' => $univ_race,
				':univ' => $univ,
				':univ_duration' => $univ_duration,
				':admin_year' => $admin_year,
				':admin_age' => $admin_age
			)
		);
		echo 'Datos Agregados';
	}

 ?>