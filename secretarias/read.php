<?php
header("Content-Type: application/json");
require_once "Database.php";
require_once "../../app/Models/Secretaria.php";

$db = (new Database())->getConnection();
$produto = new Secretaria($db);

$dados = $produto->read();
echo json_encode($dados);
