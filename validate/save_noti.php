<?php 

	include('../db/db.php.dist');
	if (isset($_POST['title'])) {

		$title = htmlspecialchars(trim($_POST['title']));
		$day = $_POST['day'];
		$month = $_POST['month'];
		$year = $_POST['year'];
		$date_add = date("d/m/y");


		$query = $DB->prepare('INSERT INTO diary VALUES(
			null,
			:title,
			:day,
			:month,
			:year,
			:date_add
		)');
		$query->execute(
			array(
				':title' => $title,
				':day' => $day,
				':month' => $month,
				':year' => $year,
				':date_add' => $date_add
			)
		);
		echo 'Nota Guardada';
	}
 ?>