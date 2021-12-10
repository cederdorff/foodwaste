<?php
  require('../class/mysql.php');
  require('../class/post.php');
  require('../class/postView.php');

  $mySql = new MySQL();

  if($_GET['action'] == 'create'){
    $post = json_decode(file_get_contents('php://input'));
    $price = $post->price;
    $seller = $post->seller;
    $name = $post->name;
    $description = $post->description;
  
    $postObject = new Post('null', $price, $name, $description, '00/00', $seller, 'null', '00/00/00');
    $postObject->SavePost($mySql);
    $response['postCreate'] = true;
    echo json_encode($response);

  }

  if($_GET['action'] == 'showPost'){
      $posts = new PostView();
      
      $response['post'] = $posts->ReturnPost($mySql);
      echo json_encode($response);
  }
?>