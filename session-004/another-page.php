<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>
  <strong>$_SESSION</strong>
  <pre>
    <?php print_r($_SESSION); ?>
  </pre>
  <strong>$_REQUEST</strong>
  <pre>
    <?php print_r($_REQUEST); ?>
  </pre>

  <h1>Form Handler</h1>

  <ul>
    <li><a href="./index.php">Welcome</a></li>
    <li><a href="./form-handler.php">Form Handler</a></li>
    <li><a href="./another-page.php">Another Page</a></li>
  </ul>
  <ul>
    <li><a href="./cookies.php">Cookies!</a></li>
  </ul>

</body>
</html>
