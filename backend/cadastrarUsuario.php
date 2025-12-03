<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
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
        $senha = $dados['senha'];
        $senhaProtegida = password_hash($senha, PASSWORD_DEFAULT);

        $stmt->close();
        $stmt = $mysqli->prepare("INSERT INTO usuarios (nomeUsuario, emailUsuario, categoriaUsuario, senhaUsuario) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $dados['nome'], $dados['email'], $dados['categoria'], $senhaProtegida);
        $stmt->execute();
        echo json_encode(["status" => "ok"]);
    }

    $stmt->close();
    $mysqli->close();
?>