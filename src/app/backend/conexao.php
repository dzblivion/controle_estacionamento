<?php
    $hostname = 'localhost';
    $dbname = 'estacionamento';
    $user = 'root';
    $pass = 'Dwdbrasiloficial12!';

    $mysqli = new mysqli($hostname, $user, $pass, $dbname);

    if($mysqli->connect_errno){
        echo "Falha ao conectar ao banco: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
?>