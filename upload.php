<?php
$uploadDir = 'images/';
$uploadFile = $uploadDir . basename($_FILES['file']['name']);

// Check for errors in file upload
if ($_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(500);
    echo json_encode(array('message' => 'Error uploading file.'));
    exit;
}

// Move uploaded file to target directory
if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
    echo json_encode(array('message' => 'Image uploaded successfully.'));
} else {
    http_response_code(500);
    echo json_encode(array('message' => 'Error moving uploaded file.'));
}
?>
