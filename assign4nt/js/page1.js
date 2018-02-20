// Function for turning paragraphs italic.
function italicParagraphs(id) {
    var paragraph = document.getElementById(id);
    if(!paragraph){
        alert("No paragraph with ID: "+id+" was found!");
        return;
    }
    paragraph.style.fontStyle = " italic ";
}
// Turn all of the paragraphs in Part 1 to italic.
italicParagraphs('paragraph-1-1');
italicParagraphs('paragraph-1-2');
italicParagraphs('paragraph-1-3');
italicParagraphs('paragraph-1-4');

// Function for assigning alternating colors to table rows.
function colorTableRows(id) {
    var table = document.getElementById('mytable');
    if(!table){
        alert("No table with ID: "+id+" was found!");
        return;
    }
    var rows = table.rows;
    var colors = [" rgba(0, 255, 0, 0.1) ", " rgba(0, 0, 255, 0.1) ", " rgba(255, 0, 0, 0.1) "]
    for(var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        row.style.backgroundColor = colors[ i % colors.length ];
    }
}
// Change the table row colors in Part 2.
colorTableRows('mytable');

// Function to add the Bootstrap table class to a table element.
function makeBootstrapTable(id) {
    var table = document.getElementById(id);
    if(!table){
        alert("No table with ID: "+id+" was found!");
        return;
    }
    table.className = table.className+" table ";
}
// Add the Bootstrap table class to the Part 2 table.
makeBootstrapTable('mytable');

// Function to make button text red.
function makeButtonTextRed(id) {
    var button = document.getElementById(id);
    if(!button){
        alert("No button with ID: "+id+" was found!");
        return;
    }
    button.style.color = "red";
}
// Make buttons' text red.
makeButtonTextRed('btn01');
makeButtonTextRed('btn04');

// Function to make small danger button.
function makeButtonSmallRed(id) {
    var button = document.getElementById(id);
    if(!button){
        alert("No button with ID: "+id+" was found!");
        return;
    }
    button.className = button.className+" btn-small btn-danger ";
}
// Make button two a small danger button.
makeButtonSmallRed('btn02');

// Function to remove a button by ID.
function removeButton(id) {
    var button = document.getElementById(id);
    if(!button){
        alert("No button with ID: "+id+" was found!");
        return;
    }
    button.remove;
}
// Remove button eight.
removeButton('btn08');

// Function to add Bootstrap image display classes.
function changeImagesInPart3(){
    var imageClasses = ["rounded-circle img-responsive", "rounded img-responsive", "img-thumbnail"]
    var part3Element = document.getElementById('part3');
    var images = part3Element.getElementsByTagName('IMG');
    if(!part3Element || !images) {
        alert("No images found in part3!");
        return;
    }
    for(var i = 0; i < images.length; i++) {
        var image = images[i];
        image.className = imageClasses[ i % imageClasses.length ]
    }
}
// Change the image classes
changeImagesInPart3();

// Function to give list items borders.
function makeLiBorderInUl(id) {
    var list = document.getElementById(id);
    var listItems = list.getElementsByTagName('LI');
    if(!list || !listItems) {
        alert("No list with ID "+id+" found!");
        return;
    }
    for(var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
        listItem.style.border = "2px solid red";
    }
}
// Give the list items their borders.
makeLiBorderInUl('ulist');

// Function to append x number of list items to list.
function addLiInOlist(id, max_number) {
    var list = document.getElementById(id);
    if(!list) {
        alert("No list with ID "+id+" found!");
        return;
    }
    if(max_number <= 0) {
        alert("Provide a max_number greater than 0!");
        return;
    }
    for(var i = 0; i < max_number; i++) {
        var listItem = document.createElement('LI');
        var listItemCounter = (i+1);
        listItem.innerHTML = "New Fruit "+listItemCounter;
        list.appendChild(listItem);
    }
}
// Append list items.
addLiInOlist('olist', 20);