<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:access");
header("Access-Control-Allow-Methods:POST");
header("Content-Type:application/json; Charset=UTF-8");
header("Access-Control-Allow-Methods:'GET, POST, DELETE, PATCH, OPTIONS'");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,x-Requested-With");




$inputs= json_decode(file_get_contents("php://input"));
    
    $name = $inputs->$name;
    $email = $inputs-> $email;
    $password = $inputs-> $password;

    $con=mysqli_content("localhost:3308","root","");
    mysqli_select_db($con,"react_db");

    $sql = "insert into register(
        name,
        email,
        password
    )
    vlaue(
        $name,
        $email,
        $passowrd

    )"
    
   
      const $result = mysqli_query($con,$sql);

    if($reslut)
    {
        $response['inputs']=array('status'=>'valid');
        echo json_encode($response);
    }
    else{
        $response['inputs']=array('status'=>'invalid');
        echo json_encode($response);
    }

















?>