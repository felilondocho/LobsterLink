
<?php
//api para obtener de la base de datos los registros
header("Access-Control-Allow-Origin: *");
	//conexion con la base de datos mysql
	$connection = mysqli_connect("", "", "","");

	//Obtiene los resultados de la base de datos y los convierte
	//a un formato json para ser leido por la app
		$query = "SELECT * FROM recetas";
		if($result = mysqli_query($connection,$query)){
			$recetas = array();
			while($row = mysqli_fetch_array($result)) {
				$id=$row['receta_id'];
			    $nombre=$row['nombre_receta'];
			    $recetatexto=$row['recetatexto'];
			    $recetas[] = array('receta_id'=> $id, 'nombre_receta'=> $nombre, 'recetatexto'=> $recetatexto);
			}

			$jsonstring = json_encode($recetas);
			echo $jsonstring;

		}else{
			echo "error";
		}
		
?>