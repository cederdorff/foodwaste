<?php
  require ('class/mysql.php');
  require ('class/message.php');

  $mySql = new MySQL(true);
  $message = new Message();

  $id = $_GET['user_id'];

  print_r($message->ReturnMessage($id, $mySql));

?>