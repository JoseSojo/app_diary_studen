<?php 

	include('../db/db.php.dist');

	$query = "SELECT * FROM diary";
	$mysql_i = mysqli_query($DBi, $query);

	$json = array();
	while ($line_task = mysqli_fetch_array($mysql_i)) {
		$json[] = $line_task;
	}
	$json_string = json_encode($json);
	echo $json_string;

 ?>