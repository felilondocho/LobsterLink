<?php
	//api para subir a la base de datos la receta ingresada por el usuario
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	//conexion con la base de datos mysql
	$connection = mysqli_connect("","","","");
	//recibir la informacion de la app y decodificar el json enviado
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    //Poner lo obtenido en el json en variables
    @$nombre = $request->nombre;
    @$recetatexto = $request->recetatexto;
	//Insertar los registros en la base de datos
	$query = "INSERT INTO recetas (nombre_receta, recetatexto) 
			VALUES ('$nombre','$recetatexto')";
	if(mysqli_query($connection,$query)){
		//Verificacion por consola de lo enviado
		    if(is_array($nombre) || is_object($nombre)){
				echo("<script>console.log('PHP: ".json_encode($nombre)."');</script>");
			}else{
				echo("<script>console.log('PHP: ".$nombre."');</script>");
			}
	}else{
		echo "error";
	}


?>