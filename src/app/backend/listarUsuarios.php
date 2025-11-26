<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Content-Type: application/json");


    include_once "./conexao.php";

    $stmt = $mysqli->prepare("SELECT * FROM usuarios");
    $stmt->execute();

    $resultado = $stmt->get_result();

    $usuarios = [];

    while ($row = $resultado->fetch_assoc()) {
        $usuarios[] = $row;
    }

    echo json_encode($usuarios);
?>
