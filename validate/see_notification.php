<?php 

	include('../db/db.php.dist');

	$query = 'SELECT * FROM diary';
	$request = mysqli_query($DBi, $query);
	if (!$request) {
		die('Ah ocurrido un error');
	}

	$json = array();
	while ($row = mysqli_fetch_array($request)) {
		$json[] = $row;
	}

	echo "<pre>";
	print_r($json);
	echo "</pre>";



?>