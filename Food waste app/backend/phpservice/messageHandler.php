<?php
  require('../class/mysql.php');
  require('../class/message.php');
  require('../class/messageChain.php');

  $mySql = new MySQL();

  if($_GET['action'] == 'send'){
  $messageFetch = json_decode(file_get_contents('php://input'));

  $theMessage = $messageFetch->message;
  $to = $messageFetch->to;
  $from = $messageFetch->from;

  
  $messageObject = new Message($theMessage, $to, $from);

 

  
  $messageObject->SaveMessage($mySql);
    $response['save'] = true;
    echo json_encode($response);
  }

  if($_GET['action'] == 'show'){
     $users = json_decode(file_get_contents('php://input'));
     $to = $users->to;
     $from = $users->from;

     $chainObject = new MessageChain($to, $from);
     $response['message'] = $chainObject->ReturnMessage($mySql);
     echo json_encode($response);

     
  }


    
    
 



  
?>