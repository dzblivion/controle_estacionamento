<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Content-Type: application/json");


    include_once "./conexao.php";

    $dados = json_decode(file_get_contents("php://input"), true);

    $stmt = $mysqli->prepare("INSERT INTO usuarios (nomeUsuario, emailUsuario, categoriaUsuario, senhaUsuario) VALUES (?, ?, ?, ?)");
    $stmt->execute([$dados["nome"], $dados['email'], $dados["categoria"], $dados["senha"]]);

    echo json_encode(["status" => "ok"]);
?>