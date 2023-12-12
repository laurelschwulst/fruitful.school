<!DOCTYPE html>
<html>

<head>

  <title>Thank you!</title>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <link rel="icon" type="image/png" href="../imgs/lemon/favicon.ico" />
  <link rel="stylesheet" href="../style.css" />
  <style>
  * { box-sizing: border-box; }
  html, body {
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #77746d;
    transition: 0s;
  }
  #thank-you {
    padding-bottom: 5vh;
  }
  </style>

</head>

<body>

  <div id="thank-you">

<?php

if(isset($_POST['email'])) {
    $data_simple = $_POST['email'];
    $data = $_POST['email'] . "\n";
    $ret = file_put_contents('emails.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file …');
    }
    else {
        echo "Thanks for your interest.";
    }
}
else {
   die('No post data to process …');
}

?>

  <a href="../index.html" class="return">Return</a>

</div>

</body>

</html>
