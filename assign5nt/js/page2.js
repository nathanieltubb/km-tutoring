// ​Use only page2.js to accomplish the following tasks on page2.html:

// Write a function validateMovieForm to check if the movie form in Part 1 
// contains all necessary data. Call the function when a user clicks on 
// Button01. When a user clicks on Button02, all validation messages should 
// disappear.
// Create an event listener for the movie form submit button. When a user 
// clicks on the submit button, the validateMovieForm function is called. 
// If the function returns true, display an alert with a message "SUCCESS"; 
// otherwise, display an alert with a message "Did not Pass Validation". 
// In both cases prevent default processing (i.e. the form should not be 
// sent to a server).
var validateMovieForm = function(){
    var form = document.forms['movieForm'];
    var errorMessageBlock = document.getElementById("movieForm-errors");
    var errorMessage = '';
    var formIsValid = true;
    if(form['title'].value == ""){
        errorMessage += "Enter a title.<br>";
        formIsValid = false;
    }
    if(form['genre'].value == ""){
        errorMessage += "Select a genre.<br>";
        formIsValid = false;
    }
    if(form['website'].value == ""){
        errorMessage += "Enter a website.<br>";
        formIsValid = false;
    }
    if(form['review'].value == ""){
        errorMessage += "Enter a review.<br>";
        formIsValid = false;
    }
    if(form['rating'].value == ""){
        errorMessage += "Select a rating.<br>";
        formIsValid = false;
    }
    if(form['select-month'].value == ""){
        errorMessage += "Select a month.<br>";
        formIsValid = false;
    }
    errorMessageBlock.innerHTML = errorMessage;
    errorMessageBlock.style.color = "red";
    return formIsValid;
}
var clearErrorMessages = function() {
    var errorMessageBlock = document.getElementById("movieForm-errors");
    errorMessageBlock.innerHTML = "";
}

var bttn01 = document.getElementById('btn01');
bttn01.addEventListener("mousedown", function(){
    validateMovieForm();
});

var bttn02 = document.getElementById('btn02');
bttn02.addEventListener("mousedown", function(){
    clearErrorMessages();
});

var movieForm = document.forms['movieForm'];
movieForm.addEventListener("submit", function(event){
    event.preventDefault();
    var errorMessageBlock = document.getElementById("movieForm-errors");
    if(validateMovieForm()) {
        errorMessageBlock.innerHTML = "Success!";
        errorMessageBlock.style.color = "green";
    } else {
        alert("Did not pass validation");
    }
});
// Write a function validateShopForm to check if the shopping form in Part 
// 3 contains all necessary data. Call the function when a user clicks on 
// Button09. When a user clicks on Button10, all validation messages should 
// disappear.
// Create an event listener for the shopping form calculate button. When a 
// user clicks on the calculate button, the validateShopForm function is 
// called. If the function returns true, calculate the total price and 
// display it in the appropriate form element. If the validation function 
// returns false, do not do anything - the validation messages indicate 
// problems with the form. Prevent default processing (i.e. the form 
// should not be sent to a server).
var validateShopForm = function(){
    console.log('validating shop form');
    var shopForm = document.forms['shopForm'];
    var errorMessageBlock = document.getElementById('shopForm-errors');
    var errorMessage = '';
    var formIsValid = true;
    if(shopForm['computer'].value == "") {
        errorMessage += 'Select a computer.<br>';
        formIsValid = false;
    }
    if(shopForm['delivery'].value == "") {
        errorMessage += 'Select a delivery option.<br>';
        formIsValid = false;
    }
    if(shopForm['quantity'].value == "") {
        errorMessage += 'Select a quantity.<br>';
        formIsValid = false;
    }
    errorMessageBlock.innerHTML = errorMessage;
    errorMessageBlock.style.color = "red";
    return formIsValid;
}

var bttn09 = document.getElementById('btn09');
bttn09.addEventListener("mousedown", function(){
    validateShopForm();
});

var bttn10 = document.getElementById('btn10');
bttn10.addEventListener("mousedown", function(){
    var errorMessageBlock = document.getElementById('shopForm-errors');
    errorMessageBlock.innerHTML = "";
});

var shopForm = document.forms['shopForm'];
var calculateButton = document.getElementById('calculate');
calculateButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(this);
    if(validateShopForm()) {
        var tax = parseInt(shopForm['tax'].value) / 100;
        var computerValue = parseInt(shopForm['computer'].value);
        var quantityValue = parseInt(shopForm['quantity'].value);
        var deliveryValue = parseInt(shopForm['delivery'].value);
        var subtotal =  computerValue * quantityValue;
        var total = ( subtotal * tax ) + subtotal + deliveryValue;
        total = total.toFixed(2);
        shopForm['price'].value = total;
    }
    return false;
});