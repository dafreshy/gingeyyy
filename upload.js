<?php
$uploadDir = 'images/';
$uploadFile = $uploadDir . basename($_FILES['fileInput']['name']);

// Check if file already exists
if (file_exists($uploadFile)) {
    http_response_code(400);
    echo json_encode(array('message' => 'File already exists.'));
    exit;
}

// Check file size (optional)
if ($_FILES['fileInput']['size'] > 5000000) { // Adjust size limit as needed (currently 5MB)
    http_response_code(400);
    echo json_encode(array('message' => 'File is too large.'));
    exit;
}

// Allow only certain file formats
$allowedTypes = array('jpg', 'jpeg', 'png', 'gif');
$uploadedFileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));
if (!in_array($uploadedFileType, $allowedTypes)) {
    http_response_code(400);
    echo json_encode(array('message' => 'Only JPG, JPEG, PNG, and GIF files are allowed.'));
    exit;
}

// Attempt to move the uploaded file to the designated directory
if (move_uploaded_file($_FILES['fileInput']['tmp_name'], $uploadFile)) {
    http_response_code(200);
    echo json_encode(array('message' => 'Image uploaded successfully.'));
} else {
    http_response_code(500);
    echo json_encode(array('message' => 'Error uploading image.'));
}
?>
