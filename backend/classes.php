<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db.php';

$sql = "SELECT classes.*, trainers.name as trainer_name 
        FROM classes 
        JOIN trainers ON classes.trainer_id = trainers.id";
$result = $conn->query($sql);

$classes = array();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $classes[] = $row;
  }
}

echo json_encode($classes);
$conn->close();
?>
