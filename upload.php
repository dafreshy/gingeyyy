<?php
$comment = $_POST['commentInput'];
$datetime = $_POST['datetime'];

// Store comment, file name, and datetime in a JSON file or database for later retrieval
$data = json_encode(array(
    'comment' => $comment,
    'datetime' => $datetime
));

file_put_contents('uploaded_images.json', $data . PHP_EOL, FILE_APPEND);

echo json_encode(array('message' => 'Image information uploaded successfully.'));
?>
