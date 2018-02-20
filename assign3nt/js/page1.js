//-----------------------------------------------------------------------------
// Create a Product class to store metadata for individual product instances.
class Product {
  constructor(productNumber, description, price, fee, quantity) {
    this.productNumber = productNumber;
    this.description = description;
    this.price = price;
    this.fee = fee;
    this.quantity = quantity;
  }
  totalAmt() {
    // Example with the fee added to total?
    // return (this.quantity * this.price) + this.fee;
    // Example with fee added to each unit.
    return this.quantity * (this.price + this.fee);
  }
}

//-----------------------------------------------------------------------------
// Create a function that takes an array of values, makes a copy of the array,
// shuffles them and returns the shuffled array.
function getShuffledUniqueImageNames(myArrayOfImages) {
  copies = myArrayOfImages.slice();
  for(var index = 0; index < copies.length; index++ ) {
    var randIndex = Math.floor(Math.random() * copies.length);
    var tmpValue = copies[index];
    copies[index] = copies[randIndex];
    copies[randIndex] = tmpValue;
  }
  return copies;
}

// Test that the shuffle works and leaves the original array alone. 
// console.log(pictures);
// console.log(getShuffledUniqueImageNames(pictures));
// console.log(pictures);

//-----------------------------------------------------------------------------
// Create a function to return the HTML table of products.
function productionTableWithParameters( arrayOfProducts, arrayOfPictureNames) {
  // Shuffle the photos.
  var photos = getShuffledUniqueImageNames(arrayOfPictureNames);

  // Test that we have a shuffled photos array
  // console.log(pictures);
  // console.log(photos);

  // Start the HTML output with the table header.
  var htmlOutput = '<tr>';
  htmlOutput += '<th>Product Number</th>';
  htmlOutput += '<th>Description</th>';
  htmlOutput += '<th>Available Qty.</th>';
  htmlOutput += '<th>Price</th>';
  htmlOutput += '<th>Fee</th>';
  htmlOutput += '<th>Total</th>';
  htmlOutput += '<th>Image</th>';
  htmlOutput += '</tr>';

  // Initalize the loop counter.
  n = 0;

  // Initalize total units.
  totalUnits = 0;

  // Initalize grand total.
  grandTotal = 0;

  // Usinge a WHILE loop to go through each product in the array.
  while(n < arrayOfProducts.length) {
    // Assign a class based on the quantity.
    var quantityClass = (arrayOfProducts[n].quantity == 0 ) ? ' no-stock ' : ' available ';

    // Assign a class based on the fee status.
    var feeClass = (arrayOfProducts[n].fee > 0 ) ? ' has-fee ' : ' no-fee ';

    // Start the output for the table row.
    htmlOutput += '<tr>';
    htmlOutput += '<td>'+arrayOfProducts[n].productNumber+'</td>';
    htmlOutput += '<td>'+arrayOfProducts[n].description+'</td>';
    htmlOutput += '<td class="text-right '+quantityClass+'">'+arrayOfProducts[n].quantity+'</td>';
    htmlOutput += '<td class="text-right">$'+arrayOfProducts[n].price+'</td>';
    htmlOutput += '<td class="text-right '+feeClass+'">$'+arrayOfProducts[n].fee+'</td>';
    
    // Use the provided Class Method to calculate the total value.
    htmlOutput += '<td class="text-right">$'+arrayOfProducts[n].totalAmt()+'</td>';

    // Pick a photo from the shuffled photos array using our current index.
    htmlOutput += '<td><img src="./images/'+photos[n]+'"></td>';
    
    htmlOutput += '</tr>';
    
    // Add to quantity total
    totalUnits = totalUnits + arrayOfProducts[n].quantity;

    // Add to grand total
    grandTotal = grandTotal + arrayOfProducts[n].totalAmt();

    // Increment the counter (must be last).
    n++;
  }

  htmlOutput += '<tr><td></td><td></td><td class="text-right total-units">'+
                totalUnits+'</td><td></td><td></td>'+
                '<td class="text-right grand-total">$'+grandTotal+
                '</td><td></td>';

  // Return the HTML string.
  return htmlOutput;

}

//-----------------------------------------------------------------------------
// Create the products array.
var products = [];

// Create each of the products and append to the array.
products.push( new Product( 'p100',	'product 1',	100, 5,  0 ) );
products.push( new Product( 'p200',	'product 2',	200, 0,  3 ) );
products.push( new Product( 'p300',	'product 3',	300, 10, 5 ) );
products.push( new Product( 'p400',	'product 4',	150, 0,  0 ) );
products.push( new Product( 'p500',	'product 5',	250, 10, 1 ) );
products.push( new Product( 'p600',	'product 6',	180, 5,  8 ) );

// Test that the new Products have been created and added to the array.
// console.log(products);

//-----------------------------------------------------------------------------
// Run the HTML table method with our given parameters.
var myHTMLTableOutput = productionTableWithParameters( products, pictures);

// Replace existing table contents with new contents.
document.getElementById('mytable').innerHTML = myHTMLTableOutput;

// Add class to table.
document.getElementById('mytable').className += ' table-striped';