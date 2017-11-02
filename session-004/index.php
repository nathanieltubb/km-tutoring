<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>

<?php
// to change a session variable, just overwrite it
// $_SESSION["favcolor"] = "yellow";
print_r($_SESSION);
?>

<h1>Welcome To Sessions</h1>
<p>Define or update the session variable.</p>
<form method="POST" action="./form-handler.php">
  <label for="my_color">My Color: </label>
  <input type="text" name="my_color" value="" placeholder="enter color">
  <button type="submit" name="submit">Set Session Variable</button>
</form>
<p>Destroy the session variable.</p>
<form method="POST" action="./form-handler.php">
  <input type="hidden" name="destroy_session" value="true">
  <button type="submit" name="submit">Destroy Session</button>
</form>
</body>
</html>
