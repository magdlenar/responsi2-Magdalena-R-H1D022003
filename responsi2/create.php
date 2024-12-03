<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "INSERT INTO races (name, description, schedule, track_details) VALUES (:name, :description, :schedule, :track_details)";
$stmt = $conn->prepare($sql);

$stmt->execute([
    ':name' => $data->name,
    ':description' => $data->description,
    ':schedule' => $data->schedule,
    ':track_details' => $data->track_details
]);

echo json_encode(['message' => 'Race added successfully']);
?>
