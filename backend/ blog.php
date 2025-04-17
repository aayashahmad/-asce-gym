<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db.php';

$sql = "SELECT * FROM blog_posts ORDER BY created_at DESC";
$result = $conn->query($sql);

$posts = array();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $posts[] = $row;
  }
}

echo json_encode($posts);
$conn->close();
?>
