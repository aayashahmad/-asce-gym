<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = $data['name'];
    $email = $data['email'];
    $phone = $data['phone'];
    $membership_type = $data['membership_type'];
    
    try {
        $stmt = $pdo->prepare("INSERT INTO members (name, email, phone, membership_type) VALUES (?, ?, ?, ?)");
        $stmt->execute([$name, $email, $phone, $membership_type]);
        
        echo json_encode(['success' => true, 'message' => 'Registration successful']);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Registration failed: ' . $e->getMessage()]);
    }
}
?> 