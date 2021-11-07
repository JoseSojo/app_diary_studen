<?php 

	include('../db/db.php.dist');

 	$query_data = "SELECT * FROM data";
 	$mysqli =  mysqli_query($DBi,$query_data);

 	$json = array();
 	while ($col = mysqli_fetch_array($mysqli)) {
 		$json = $col;
 	}
 	$json_string = json_encode($json);
 	echo (json_encode($json));
	
 	
?>