<?php
  class MessageChain {
      private $toId;
      private $fromId;
      private $chain = [];

      function __construct($to, $from){
          $this->toId = $to;
          $this->fromId = $from;
      }

      public function ReturnMessage($mySql){
      
        $sql = "SELECT * FROM message WHERE to_id = '$this->toId' || from_id = '$this->fromId'";
        $result = $mySql->Query($sql);
        
        while($r = $result->fetch_assoc()){
           array_push($this->chain, $r);
        }
        
        
        return $this->chain;
    }
  }
?>