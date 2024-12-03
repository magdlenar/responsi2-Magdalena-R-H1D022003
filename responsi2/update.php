<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "UPDATE races SET name = :name, description = :description, schedule = :schedule, track_details = :track_details WHERE id = :id";
$stmt = $conn->prepare($sql);

$stmt->execute([
    ':name' => $data->name,
    ':description' => $data->description,
    ':schedule' => $data->schedule,
    ':track_details' => $data->track_details,
    ':id' => $data->id
]);

echo json_encode(['message' => 'Race updated successfully']);
?>
