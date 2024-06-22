<?php
$uploadDir = 'images/';
$uploadFile = $uploadDir . basename($_FILES['file']['name']);
$comment = $_POST['commentInput'];

// Check if file is an image
$check = getimagesize($_FILES['file']['tmp_name']);
if ($check === false) {
    http_response_code(400);
    echo json_encode(array('message' => 'File is not an image.'));
    exit;
}

// Check if file already exists
if (file_exists($uploadFile)) {
    http_response_code(400);
    echo json_encode(array('message' => 'File already exists.'));
    exit;
}

// Try to upload file
if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
    // Store comment and file name in a JSON file or database for later retrieval
    $data = json_encode(array('src' => basename($_FILES['file']['name']), 'comment' => $comment));

    file_put_contents('uploaded_images.json', $data . PHP_EOL, FILE_APPEND);

    echo json_encode(array('message' => 'Image uploaded successfully.'));
} else {
    http_response_code(500);
    echo json_encode(array('message' => 'Error uploading file.'));
}
?>
