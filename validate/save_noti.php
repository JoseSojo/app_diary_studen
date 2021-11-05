<?php 

	include('../db/db.php.dist');
	if (isset($_POST['title'])) {

		$title = htmlspecialchars(trim($_POST['title']));
		$descript = htmlspecialchars(trim($_POST['descript']));
		$day = htmlspecialchars(trim($_POST['day']));
		$month = htmlspecialchars(trim($_POST['month']));
		$year = htmlspecialchars(trim($_POST['year']));
		$date_add = date("d/m/y");

		$query = $DB->prepare('INSERT INTO diary VALUES(
			null,
			:title,
			:descript,
			:day,
			:month,
			:year,
			:date_add
		)');
		$query->execute(
			array(
				':title' => $title,
				':descript' => $descript,
				':day' => $day,
				':month' => $month,
				':year' => $year,
				':date_add' => $date_add
			)
		);
		echo 'Nota Guardada';
	}
 ?>