<?php
$result = shell_exec('code .');
header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit;

?>