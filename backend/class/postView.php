<?php
  class PostView {
      private $posts = [];

      

      public function ReturnPost($mySql){
      
        $sql = "SELECT * FROM products";
        $result = $mySql->Query($sql);
        
        while($r = $result->fetch_assoc()){
           array_push($this->posts, $r);
        }
        
        
        return $this->posts;
    }
  }
?>