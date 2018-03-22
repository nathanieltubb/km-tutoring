
// change background color of TD containing "Paris"
var mytable = document.getElementsByTagName('table');
console.log(mytable);
console.log("Number of Rows: " + mytable[0].rows.length);
console.log("Number of Columns: " + mytable[0].rows[0].cells.length);

// write a loop for each table row
for(var line = 0; line < mytable[0].rows.length; line++)
{
    var myrow = mytable[0].rows[line];
    myrow.style.border = "4px solid green";
    // write a loop to access each cell, i.e. each TD element
    for(var column = 0; column < myrow.cells.length; column++)
    {
       var mycell = myrow.cells[column];
       if (mycell.innerHTML === "Paris")
       {
         mycell.style.backgroundColor = "red";
       }
    }
}


// // write a function that will make all images circule
// function makeAllImagesCircular() {
//   var images = document.getElementsByTagName('img');
//   console.log(images.length);

//   for (var index = 0; index < images.length; index++) {
//     var myImage = images[index];
//     myImage.className += " rounded-circle";
//   }
// }
// makeAllImagesCircular();

// // Write a function that changes font size to 15px for all paragraphs

// function changeParagraphFontSize(size) {
//   var pars = document.getElementsByTagName('p');
//   console.log(pars.length);

//   for (var counter = 0; counter < pars.length; counter++) {
//     //pars[counter].style.border = "5px solid green";
//     pars[counter].style.fontSize = size + "px";
//   }
// }
// changeParagraphFontSize(15);

// // modify the table so that each TD element has a different background color

// var mytable = document.getElementsByTagName('table');
// console.log(mytable);
// console.log("Number of Rows: " + mytable[0].rows.length);
// console.log("Number of Columns: " + mytable[0].rows[0].cells.length);

// // write a loop for each table row
// for(var line = 0; line < mytable[0].rows.length; line++)
// {
//     var myrow = mytable[0].rows[line];
//     myrow.style.border = "4px solid green";
//     // write a loop to access each cell, i.e. each TD element
//     for(var column = 0; column < myrow.cells.length; column++)
//     {
//        var mycell = myrow.cells[column];
//        mycell.style.border = "6px solid red";
//        mycell.innerHTML = "" + line + " " + column;
//        mycell.style.backgroundColor = 'rgba(1,2,3,0.5)';
//        mycell.style.backgroundColor = 'rgba(' + line * 1000 + "," +  line * 100 + "," + column * 10 + ',0.5)';

//     }
// }
// mytable[0].classList = "table table-bordered table-striped";




// var myuls = document.getElementsByTagName('ul');

// //myuls[0].style.border = "5px solid green";
// myuls[1].style.border = "5px solid green";

// // append new LI to the UL with text "We did it"

// // 1. create LI node
// var myli = document.createElement('LI');
// myli.innerHTML = "We did it!";

// // 2. append the created element to the UL node
// myuls[1].appendChild(myli);

// // as design mistake append a paragraph to the UL
// var myp = document. createElement("p");
// myp.innerHTML = "Do not do This !";
// myuls[1].appendChild(myp);