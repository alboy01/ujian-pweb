<?php
header("Content-Type: application/json");

include "koneksi.php";

$sql = "SELECT * FROM peserta ORDER BY id_peserta DESC";
$result = mysqli_query($kon, $sql);

$peserta = [];
while ($row = mysqli_fetch_assoc($result)) {
    $peserta[] = $row;
}

echo json_encode($peserta);
