// When a mouse is above any paragraph, change the background color of the 
// paragraph to red.
// When a mouse is above any table cell, change its background color to red.
// When you click on any image, change its width to 50 px. On the next click, 
// restore the image to its original size.
//-----------------------------------------------------------------------------
// Get all paragraphs on the page
var paragraphs = document.getElementsByTagName('P');
// Loop through them
for(var i = 0; i < paragraphs.length; i++) {
    // Add the "mouseover" event listener
    paragraphs[i].addEventListener("mouseover", function(event) {
        // Set the current target background color
        event.target.style.backgroundColor = "red";    
    });
    // Add the "mouseleave" event listener
    paragraphs[i].addEventListener("mouseleave", function(event) {
        // Reset the current target background color
        event.target.style.backgroundColor = "";    
    });
}
// Get all table cells on the page
var tableCell = document.getElementsByTagName('td');
// Loop through them
for(var i = 0; i < tableCell.length; i++) {
    // Add the "mouseover" event listener
    tableCell[i].addEventListener("mouseover", function(event) {
        // Set the current target background color
        event.target.style.backgroundColor = "red";    
    });
    // Add the "mouseleave" event listener
    tableCell[i].addEventListener("mouseleave", function(event) {
        // Reset the current target background color
        event.target.style.backgroundColor = "";    
    });
}
// Get all images on the page
var images = document.getElementsByTagName('img');
// Loop through them
for(var i = 0; i < images.length; i++) {
    // Add the "mouseover" event listener
    images[i].addEventListener("mousedown", function(event) {
        // Set the current target background color
        if(this.width == "50"){
            this.width = "150";
            return;
        }
        this.width = "50";
        return;
    });
}