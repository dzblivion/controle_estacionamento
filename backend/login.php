<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }
    include_once "./conexao.php";

    $dados = json_decode(file_get_contents("php://input"), true);

    if (!isset($dados['email']) || !isset($dados['senha'])){
        echo json_encode(["status" => "erro", "mensagem" => "Email e senha são obrigatórios"]);
        exit;
    }

    $stmt = $mysqli->prepare("SELECT idUsuario, nomeUsuario, emailUsuario, categoriaUsuario, senhaUsuario FROM usuarios WHERE emailUsuario = ?");
    $stmt->bind_param("s", $dados['email']);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0){
        $usuario = $resultado->fetch_assoc();
        
        if (password_verify($dados['senha'], $usuario['senhaUsuario'])){
            unset($usuario['senhaUsuario']);

            echo json_encode(
                [
                    "status" => "ok",
                    "mensagem" => "Login realizado com sucesso!",
                    "usuario" => $usuario
                ]
            );
        } else {
            echo json_encode(
                [
                    "status" => "erro",
                    "mensagem" => "Email ou Senha incorretos!"
                ]
            );
        }

    } else {
        echo json_encode([
            "status" => "erro",
            "mensagem" => "Senha incorreta"
        ]);
    }

    $stmt->close();
    $mysqli->close();
?>