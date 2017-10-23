<!DOCTYPE html>
<html>
<head>
  <title>Calculator Form</title>
  <style type="text/css">
    form .input-wrapper {
      margin-bottom: 1.5rem;
    }
  </style>
</head>
<body>
  <h2>Calculator Form</h2>
  <form method="POST" action="./v1-calculator.php">
    <p>Calculate the sum or product of a given number range.</p>
    <div class="input-wrapper">
      <label for="first_number">First Number: </label>
      <input type="text" name="first_number" placeholder="Enter First Number" />
    </div>
    <div class="input-wrapper">
      <label for="second_number">Second Number: </label>
      <input type="text" name="second_number" placeholder="Enter Second Number" />
    </div>
    <div class="input-wrapper">
      <p>Select An Operation:</p>
      <!-- Set the default radio button option with the attribute: checked="checked" -->
      <!-- <label for="operation_sum">Calculate Sum</label><input type="radio" id="operation_sum" name="operation" value="sum" checked="checked" /> -->
      <label for="operation_sum">Calculate Sum</label><input type="radio" id="operation_sum" name="operation" value="sum" />
      <label for="operation_product">Calculate Product</label><input type="radio" id="operation_product" name="operation" value="product" />
    </div>
    <div class="input-wrapper">
      <input type="submit" name="submit" value="Calculate">
    </div>
  </form>
</body>
</html>
