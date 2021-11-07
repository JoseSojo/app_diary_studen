<?php 

	include('../db/db.php.dist');

	$query = 'SELECT * FROM history';
	$request = mysqli_query($DBi, $query);

	$json = array();
	while ($row = mysqli_fetch_array($request)) {
		$json[] = $row;
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;



?>