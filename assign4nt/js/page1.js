//-----------------------------------------------------------------------------
// Function for turning paragraphs italic.
function italicParagraphs(id) {
    var paragraph = document.getElementById(id);
    // Check if we have selected the element.
    if(!paragraph){
        alert("No paragraph with ID: "+id+" was found!");
        return;
    }
    // Use the style attribute to apply the font-style CSS.
    paragraph.style.fontStyle = " italic ";
}
// Turn all of the paragraphs in Part 1 to italic.
italicParagraphs('paragraph-1-1');
italicParagraphs('paragraph-1-2');
italicParagraphs('paragraph-1-3');
italicParagraphs('paragraph-1-4');

//-----------------------------------------------------------------------------
// Function for assigning alternating colors to table rows.
function colorTableRows(id) {
    var table = document.getElementById('mytable');
    // Check if we have selected the element.
    if(!table){
        alert("No table with ID: "+id+" was found!");
        return;
    }
    var rows = table.rows;
    // Create an array of the possible background colors.
    var colors = [" rgba(0, 255, 0, 0.1) ", 
        " rgba(0, 0, 255, 0.1) ", 
        " rgba(255, 0, 0, 0.1) "];
    // Loop through the table rows.
    for(var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        // Use the style attribute to apply the font-style CSS.
        // We are using the modulus of the current index and the number of
        // colors to select the next color in sequence.
        row.style.backgroundColor = colors[ i % colors.length ];
    }
}
// Change the table row colors in Part 2.
colorTableRows('mytable');

//-----------------------------------------------------------------------------
// Function to add the Bootstrap table class to a table element.
function makeBootstrapTable(id) {
    var table = document.getElementById(id);
    // Check if we have selected the element.
    if(!table){
        alert("No table with ID: "+id+" was found!");
        return;
    }
    // Append the new classname. Doing this way would not overwrite
    // existing classes on the element.
    table.className = table.className + " table ";
}
// Add the Bootstrap table class to the Part 2 table.
makeBootstrapTable('mytable');

//-----------------------------------------------------------------------------
// Function to make button text red.
function makeButtonTextRed(id) {
    var button = document.getElementById(id);
    // Check if we have selected the element.
    if(!button){
        alert("No button with ID: " + id + " was found!");
        return;
    }
    // Use the style attribute to apply the font color CSS.
    button.style.color = "red";
}
// Make buttons' text red.
makeButtonTextRed('btn01');
makeButtonTextRed('btn04');

//-----------------------------------------------------------------------------
// Function to make small danger button.
function makeButtonSmallRed(id) {
    var button = document.getElementById(id);
    // Check if we have selected the element.
    if(!button){
        alert("No button with ID: " + id + " was found!");
        return;
    }
    button.className = button.className+" btn-small btn-danger ";
}
// Make button two a small danger button.
makeButtonSmallRed('btn02');

//-----------------------------------------------------------------------------
// Function to remove a button by ID.
function removeButton(id) {
    var button = document.getElementById(id);
    // Check if we have selected the element.
    if(!button){
        alert("No button with ID: " + id + " was found!");
        return;
    }
    button.remove;
}
// Remove button eight.
removeButton('btn08');

//-----------------------------------------------------------------------------
// Function to add Bootstrap image display classes.
function changeImagesInPart3(){
    // Make an array of the classnames that will be assigned.
    var imageClasses = ["rounded-circle img-responsive", 
        "rounded img-responsive", 
        "img-thumbnail"];
    // Select the Part 3 parent element
    var part3Element = document.getElementById('part3');
    // Select the images that are child elements of the Part 3 element.
    var images = part3Element.getElementsByTagName('IMG');
    // Check that we have successfully selected both sets of elements.
    if(!part3Element || !images) {
        alert("No images found in part3!");
        return;
    }
    // Loop through the image elements.
    for(var i = 0; i < images.length; i++) {
        // Select the current image.
        var image = images[i];
        // Apply a classname to the element.
        // We will use the modulus of the current index
        // and the number of available classnames to choose one.
        image.className = imageClasses[ i % imageClasses.length ]
    }
}
// Change the image classes
changeImagesInPart3();

//-----------------------------------------------------------------------------
// Function to give list items borders.
function makeLiBorderInUl(id) {
    var list = document.getElementById(id);
    var listItems = list.getElementsByTagName('LI');
    // Check that we have successfully selected both sets of elements.
    if(!list || !listItems) {
        alert("No list with ID " + id + " found!");
        return;
    }
    for(var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        // Use the style attribute to change the border CSS.
        // This applies inline CSS.
        listItem.style.border = "2px solid red";
    }
}
// Give the list items their borders.
makeLiBorderInUl('ulist');

//-----------------------------------------------------------------------------
// Function to append x number of list items to list.
// Takes two parameters, the element ID and the number
// of elements to append.
function addLiInOlist(id, max_number) {
    var list = document.getElementById(id);
    // Check if we have selected the element.
    if(!list) {
        alert("No list with ID " + id + " found!");
        return;
    }
    // Check that there has been a useful number passed to the method.
    if(max_number <= 0) {
        alert("Provide a max_number greater than 0!");
        return;
    }
    // Loop for the number of times specified by the second parameter.
    for(var i = 0; i < max_number; i++) {
        // Create a new DOM element
        var listItem = document.createElement('LI');
        // Create an incrementing value to use as text in the new element.
        var listItemCounter = (i+1);
        // Apply the text to the new element.
        listItem.innerHTML = "New Fruit "+listItemCounter;
        // Append the new element to the list.
        list.appendChild(listItem);
    }
}
// Append list items.
addLiInOlist('olist', 20);