<!DOCTYPE html>
<html>
<head>
  <title>Show Characters</title>
  <style type="text/css">
  .result, .error {
    margin-left: 1rem;
    padding: 1rem;
    border-left: 2px solid;
    border-bottom: 2px solid;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.2;
    display: inline-block;
  }
  .error {
    border-color: orangered;
  }
  .result {
    border-color: lightgreen;
  }
</style>
</head>
<body>
  <h2>Show Characters</h2>
  <?php
  // Set up a couple variables for returning our messages.
  $error_messages = '';
  $forward_characters = '';
  $reverse_characters = '';

  // Check if the values have been passed from the form.
  // If there is an error, let's append the error message to
  // the list of messages.
  if(!isset($_POST['greeting']) || empty($_POST['greeting'])) {
    $error_messages .= '<li>Missing <em>Greeting</em> value!</li>';
  }

  // Continue only if a greeting value is present.
  if(isset($_POST['greeting']) || !empty($_POST['greeting'])) {

    // Collect the greeting into its own variable and strip HTML tags
    $greeting = strip_tags($_POST['greeting']);

    // Calculate the length of the string
    $greeting_length = strlen($greeting);

    // Define our character counts for the two scenarios
    $greeting_forward_character_count = 2;
    $greeting_reverse_character_count = 1;

    // Construct the for loop to loop through the length of the string
    // incrementing the index position by the defined character count.
    // Note: If we use just the basic $index++ we will get unwanted
    // overlapping results.
    // Note: That we are using the string length MINUS one. This is
    // because we are starting our index at zero and the substr() function
    // uses a zero-based position (similar to a basic array index scheme).
    // for ($index = 0; $index < $greeting_length - 1; $index++) {
    for ($index = 0; $index < $greeting_length - 1; $index += $greeting_forward_character_count) {
      $forward_characters .= substr($greeting, $index, $greeting_forward_character_count);
      $forward_characters .= '<br>';
    }

    // The second loop we want to start at the end and increment backwards
    // until we reach position zero.
    // There are other ways this could be done, but this seems like the
    // simplest calculation.
    for ($index = $greeting_length - 1; $index >= 0; $index--) {
      $reverse_characters .= substr($greeting, $index, $greeting_reverse_character_count);
      $reverse_characters .= '<br>';
    }

  }
  ?>
  <!-- Output the error message(s). -->
  <?php if( !empty($error_messages) ) : ?>
    <div class="error">
      <ul>
        <?php echo($error_messages); ?>
      </ul>
    </div>
  <?php endif; ?>

  <!-- Output the result message(s). -->
  <?php if( !empty($forward_characters) && !empty($reverse_characters) ) : ?>
    <div class="result">

      <h5>Forward, Two Characters Per Line</h5>
      <?php echo(strtolower($forward_characters)); ?>

      <h5>Reverse, One Character Per Line</h5>
      <?php echo(strtoupper($reverse_characters)); ?>

    </div>
  <?php endif; ?>

  <!-- Provide a way back to the main calculation form. -->
  <p><a href="./mygreetings_form.php" class="back-link"><button>Go Back to Form</button></a></p>

</body>
</html>
