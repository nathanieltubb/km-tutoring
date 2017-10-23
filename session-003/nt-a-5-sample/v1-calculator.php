<!DOCTYPE html>
<html>
<head>
  <title>Calculator Form Result</title>
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
  <h2>Calculator Form Result</h2>
  <?php
  // Set up a couple variables for returning our messages.
  $error_messages = '';
  $result_message = '';

  // Check if the values have been passed from the form.
  // If there is an error, let's append the error message to
  // the list of messages.
  if(!isset($_POST['first_number'])) {
    $error_messages .= '<li>Missing <em>First Number</em> value!</li>';
  }
  if(!isset($_POST['second_number'])) {
    $error_messages .= '<li>Missing <em>Second Number</em> value!</li>';
  }
  if(!isset($_POST['operation'])) {
    $error_messages .= '<li>Missing <em>Operation</em> value!</li>';
  }

  // Strip HTML tags and validate the values as integers
  // Note: intval() will return 0 on falure.
  $first_number = intval(strip_tags($_POST['first_number']));
  $second_number = intval(strip_tags($_POST['second_number']));

  // Set an error message if either value is zero.
  if($first_number == 0 || $second_number == 0) {
    $error_messages .= "<li>Warning! Calculation by '0'; please check your input values!</li>";
  }

  // Only continue with the calculation if numbers are valid, non-zero, and
  // operation is present.
  if(!empty($first_number) && !empty($second_number)
    && isset($_POST['operation']) && !empty($_POST['operation'])) {

    // Using a switch statement to chose the operation to perform on the values.
    switch ($_POST['operation']) {

      // Let's perform some addition
      case 'sum':
      $sum = $first_number + $second_number;
      $result_message .= 'The sum of ' . $first_number . ' and '
      . $second_number . ' is ' . $sum;
      break;

      // Let's perform some multiplication
      case 'product':
      $product = $first_number * $second_number;
      $result_message .= 'The product of ' . $first_number . ' and '
      . $second_number . ' is ' . $product;
      break;

      // Oops! It appears that the provided operation does not match our
      // set of valid operations.
      default:
      $error_messages .= '<li>Invalid operation requested!</li>';
      break;
    }
  }


  ?>
  <!-- Output the error message(s). -->
  <?php if(!empty($error_messages)) : ?>
    <div class="error">
      <ul>
        <?php echo($error_messages); ?>
      </ul>
    </div>
  <?php endif; ?>

  <!-- Output the result message. -->
  <?php if(!empty($result_message)) : ?>
    <div class="result">
      <?php echo($result_message); ?>
    </div>
  <?php endif; ?>

  <!-- Provide a way back to the main calculation form. -->
  <p><a href="./calculator_form.php" class="back-link"><button>Go Back to Form</button></a></p>

</body>
</html>
