<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require_once "../Database.php";
require_once __DIR__ . '/../../../app/Models/Departamento.php';

$data = json_decode(file_get_contents("php://input"), true);

$db = (new Database())->getConnection();
$departamento = new Departamento($db);

if ($departamento->create($data)) {
    echo json_encode(["message" => "Secretaria cadastrado com sucesso."]);
} else {
    echo json_encode(["error" => "Erro ao cadastrar."]);
}
