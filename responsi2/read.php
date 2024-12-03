<?php
include 'config.php';

$sql = "SELECT * FROM races";
$stmt = $conn->prepare($sql);
$stmt->execute();

$races = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($races);
?>
