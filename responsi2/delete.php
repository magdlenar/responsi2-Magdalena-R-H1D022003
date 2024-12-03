<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "DELETE FROM races WHERE id = :id";
$stmt = $conn->prepare($sql);

$stmt->execute([':id' => $data->id]);

echo json_encode(['message' => 'Race deleted successfully']);
?>
