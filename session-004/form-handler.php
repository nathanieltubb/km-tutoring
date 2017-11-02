<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>
  <strong>Starting Values</strong><br>
  <hr>
  <strong>$_SESSION</strong>
  <pre>
    <?php print_r($_SESSION); ?>
  </pre>
  <strong>$_REQUEST</strong>
  <pre>
    <?php print_r($_REQUEST); ?>
  </pre>
  <hr>

  <h1>Form Handler</h1>
  <?php
  /**
   * Scenario: $_SESSION value is not currently set and will be defined with the new value.
   */
  ?>
  <?php
  if( ! isset($_SESSION['my_session_color']) && isset($_REQUEST['my_color']) && !empty($_REQUEST['my_color']) ) :
    $_SESSION['my_session_color'] = $_REQUEST['my_color'];
    ?>
    <strong><em>Session value for 'my_session_color' has been created.</em></strong>
  <?php endif; ?>

  <?php
  /**
   * Scenario: $_SESSION value is currently set and will be defined with the new value.
   */
  ?>

  <?php
  if(isset($_SESSION['my_session_color']) && isset($_REQUEST['my_color']) && !empty($_REQUEST['my_color']) ) :
    $_SESSION['my_session_color'] = $_REQUEST['my_color'];
    ?>
    <strong><em>Session value for 'my_session_color' has been updated.</em></strong>
  <?php endif; ?>

  <?php
  if(isset($_REQUEST['destroy_session']) && $_REQUEST['destroy_session'] ==  true) :
    // remove all session variables
    session_unset();
    // destroy the session
    session_destroy();
    ?>
    <strong><em>Session has been destroyed.</em></strong>
  <?php endif; ?>


  <ul>
    <li><a href="./index.php">Welcome</a></li>
    <li><a href="./form-handler.php">Form Handler</a></li>
    <li><a href="./another-page.php">Another Page</a></li>
  </ul>

  <strong>Ending Values</strong><br>
  <hr>
  <strong>$_SESSION</strong>
  <pre>
    <?php print_r($_SESSION); ?>
  </pre>
  <strong>$_REQUEST</strong>
  <pre>
    <?php print_r($_REQUEST); ?>
  </pre>
  <hr>

</body>
</html>
