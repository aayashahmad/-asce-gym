<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db.php';

$sql = "SELECT * FROM trainers";
$result = $conn->query($sql);

$trainers = array();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $trainers[] = $row;
  }
}

echo json_encode($trainers);
$conn->close();
?>
