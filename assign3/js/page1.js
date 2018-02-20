/* Karrine McFarlane-Magnussen
IMG 111 Intro to JavaScript
Instructor: Frank Nisack
Assignment 3 */

/*


Write a function productionTableWithParameters( arrayOfProducts, arrayOfPictureNames) 
that returns a string to create an HTML table. This function has to use a loop.
The second last column Total should contain the total amount of inventory for a given product.
The last column Image should contain a random image obtained by using the getShuffledUniqueImageNames function so that there are no repeated images.
If a product has a non-zero fee, highlight the corresponding fee table element.
If a product quantity is zero (i.e. no stock), highlight the corresponding quantity table element.
The last row should show calculated total quantity and cost of total inventory.
Obtain the DOM element and call the above functions so that the table is properly displayed.
*/

//Create 6 product OBJECTS :product number, description, available quantity, price and fee

//Create a Product Class Object
class Product {
    constructor(productNumber, description, avQuantity, price, fee) {
        this.productNumber = productNumber;
        this.description = description;
        this.avQuantity = avQuantity;
        this.price = price;
        this.fee = fee; 
        this.totalAmount = price + fee; 
      
    }
    
}

//Create the products
var product1 = new Product(101,"Product 1", 600, 350.00, 7.50 );
var product2 = new Product(102,"Product 2", 500, 325.00, 7.50 );
var product3 = new Product(103,"Product 3", 400, 300.00, 7.50 );
var product4 = new Product(104,"Product 4", 400, 275.00, 5.50 );
var product5 = new Product(105,"Product 5", 300, 250.00, 5.50 );
var product6 = new Product(106,"Product 6", 50, 150.00, 225.50 );
 
 //////// END OF PRODUCT OBJECTS  ///////////////////

;

 //Place the above created objects into an array called products.

 var products = []
 products.push(product1);
 products.push(product2);
 products.push(product3);
 products.push(product4);
 products.push(product5);
 products.push(product6);

 //Test array
 //console.log(products);


//Write a function getShuffledUniqueImageNames(myArrayOfImages) 
//that returns an array of random image names without duplicates. 
//Remember, that all image names are available in the array pictures. 
//Be sure that the original pictures array is not changed. 

function getShuffledUniqueImageNames(values) {
//create variable
var arrayCopy = values.slice(0);
//set index to 0
for (var index = 0; index < arrayCopy.length; index++){
//generate random index (start place)
var randIndex = Math.floor(Math.random() * arrayCopy.length);
var tmpValue = arrayCopy[index];
arrayCopy[index] = arrayCopy[randIndex];
arrayCopy[randIndex] = tmpValue;
}
return arrayCopy;
}


console.log(pictures);
console.log(getShuffledUniqueImageNames(pictures));
console.log(pictures);
console.log(getShuffledUniqueImageNames(pictures)); 

//Write a function productionTableWithParameters(arrayOfProducts, arrayOfPictureNames) 
//that returns a string to create an HTML table. 
//This function has to use a loop.

//Define Variables //////////////////////////
//var arrayOfProducts = products;
//var arrayOfPictureNames = getShuffledUniqueImageNames(pictures);

////////// Create Function

function productionTableWithParameters(array1) {
    var newTable;
    var totalQuantity = 0;
    var grandTotal = 0;
    //create Table Open and Row One
    newTable = "";
    newTable += '<table cellborder="2"><tr>';
    newTable += '<td>Product Number</td><td> Description </td><td> Available Qty </td><td> Price </td>';
    newTable += '<td> Product Number </td> <td>Fee</td><td>Total</td><td>Image</td></tr>';
    // create a function to pull the product information into the HTML Row
    for (index2 = 0; index2 < array1.length; index2++){
        newTable += "<tr>";
        newTable += "<td>" +array1[index2].productNumber + "</td>";
        newTable += "<td>" +array1[index2].description + "</td>";
        newTable += "<td>$" +array1[index2].avQuantity + "</td>";
        newTable += "<td>$" +array1[index2].price + "</td>";
        newTable += "<td>$" +array1[index2].fee + "</td>";
        newTable += '<td align="right">$' +array1[index2].totalAmount + "</td>";
        newTable += "</tr>";
        totalQuantity += array1[index2].avQuantity;
        grandTotal += array1[index2].totalAmount;
    }
        newTable += "<tr>";
        newTable += '<td>'+totalQuantity+'</td>';
        newTable += '<td>'+grandTotal+'</td>';
        newTable += "<tr>";
        newTable += '</table>';
    return newTable;
}


document.getElementById('mytable').innerHTML = productionTableWithParameters(products);



// function productionTableWithParameters(array1) {
//     var newTable;
//     // Create vars to store the running totals.
//     var totalQuantity = 0;
//     var grandTotal = 0;
    
//     ...
    
//     newTable += '<table>';
//     for (index2 = 0; index2 < array1.length; index2++){
        
//         ...
        
//         // Add the current product's values to the running totals
//         totalQuantity += array1[index2].avQuantity;
//         grandTotal += array1[index2].totalAmount;
//     }

//     // Output the final running totals.
//     newTable += "<tr>";
//     newTable += '<td>'+totalQuantity+'</td>';
//     newTable += '<td>'+grandTotal+'</td>';
//     newTable += "<tr>";
//     newTable += '</table>';

//     return newTable;
// }