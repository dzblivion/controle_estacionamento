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

if (!isset($dados['email'])){
    echo json_encode(["status" => "erro", "mensagem" => "Email é obrigatório"]);
    exit;
}

$stmt = $mysqli->prepare("SELECT * FROM usuarios WHERE emailUsuario = ?");
$stmt->bind_param("s", $dados['email']);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0){
    
    $usuario = $resultado->fetch_assoc();

    // -------------------------
    // GERAR TOKEN DE RECUPERAÇÃO
    // -------------------------
    $token = bin2hex(random_bytes(16));

    // Salvar token no banco (recomendado)
    $stmt2 = $mysqli->prepare("UPDATE usuarios SET tokenRecuperacao=? WHERE idUsuario=?");
    $stmt2->bind_param("si", $token, $usuario["idUsuario"]);
    $stmt2->execute();

    // -------------------------
    // CHAMAR O NODE COM PARAMETROS
    // -------------------------
    $cmd = 'node "' . __DIR__ . '/email.js" '
     . escapeshellarg($usuario['nomeUsuario']) . ' '
     . escapeshellarg($usuario['emailUsuario']) . ' '
     . escapeshellarg($token) . ' '
     . escapeshellarg($usuario['idUsuario']);

    $saida = shell_exec($cmd . " 2>&1");


    // -------------------------
    // RETORNAR UM JSON ÚNICO
    // -------------------------
    file_put_contents("debug_node.txt", $saida);
    echo json_encode([
        "status" => "ok",
        "mensagem" => "Email enviado com sucesso",
        "debug_node" => $saida
    ]);

} else {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Email não encontrado"
    ]);
}

$stmt->close();
$mysqli->close();
?>
