<?php 

	include('../db/db.php.dist');

 	$query_data = "SELECT * FROM matter";
 	$request =  mysqli_query($DBi,$query_data);

 	$json = array();
 	while ($row = mysqli_fetch_array($request)) {
 		$json[] = $row;
 	}
 	$json_string = json_encode($json);
 	echo ($json_string);

 ?>