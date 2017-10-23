<!DOCTYPE html>
<html>
<head>
  <title>My Greetings Form</title>
  <style type="text/css">
  form .input-wrapper {
    margin-bottom: 1.5rem;
  }
</style>
</head>
<body>
  <h2>My Greetings Form</h2>
  <form method="POST" action="./v1-show_characters.php">
    <p>Enter a greeting and show the characters.</p>
    <div class="input-wrapper">
      <label for="greeting">Greeting: </label>
      <input type="text" name="greeting" placeholder="Enter Your Greeting" />
    </div>
    <div class="input-wrapper">
      <input type="submit" name="submit" value="Show Characters">
    </div>
  </form>
</body>
</html>
