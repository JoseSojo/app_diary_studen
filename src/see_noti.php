<?php 

	include('../db/db.php.dist');

	$query = "SELECT * FROM diary";
	$mysql_i = mysqli_query($DBi, $query);

	$json = array();
	while ($row = mysqli_fetch_array($mysql_i)) {
		$json[] = $row;
	}
	$json_string = json_encode($json);
	echo $json_string;

 ?>