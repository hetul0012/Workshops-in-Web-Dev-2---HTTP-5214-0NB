<?php
$connect = mysqli_connect(
    'db',
    'lamp_docker',
    'password',
    'Lamp_demo'
);

if (!$connect) {
    die('Connection error: ' . mysqli_connect_error());
}

$query = 'SELECT * FROM blog';
$result = mysqli_query($connect, $query);

echo '<h1>MySQL Content: </h1>';

while ($record = mysqli_fetch_assoc($result)) {
    echo '<h2>' . $record['title'] . '</h2>';
    echo '<p>' . $record['content'] . '</p>';
    echo 'Posted: ' . $record['date'];
    echo '<hr>';
}
?>
