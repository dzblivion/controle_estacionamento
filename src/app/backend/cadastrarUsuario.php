<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

    include_once "./conexao.php";

    $dados = json_decode(file_get_contents("php://input"), true);

    $stmt = $mysqli->prepare("SELECT * FROM usuarios WHERE emailUsuario = ?");
    $stmt->bind_param("s", $dados['email']);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if($resultado->num_rows > 0){
        echo json_encode(["status" => "erro: Usuário já existe"]);
    }else{
        $stmt->close();
        $stmt = $mysqli->prepare("INSERT INTO usuarios (nomeUsuario, emailUsuario, categoriaUsuario, senhaUsuario) VALUES (?, ?, ?, ?)");
        $stmt->execute([$dados["nome"], $dados['email'], $dados["categoria"], $dados["senha"]]);
        echo json_encode(["status" => "ok"]);
    }

    $stmt->close();
    $mysqli->close();
?>