class Computer {
    constructor(brandName, price) {
        this.brandName = brandName;
        this.price = price;
    }

}

var computer1 = new Computer("Windows", 800);
var computer2 = new Computer("Mac", 1800);
var computer3 = new Computer("Linux", 500);

var computers = [computer1, computer2, computer3];

/*
<ol>
  <li> Windows </li>
  <li> Mac </li>
  <li> Linux </li>
</ol>
*/

// write a function "createComputerOrderList" 
function createComputerOrderedList(machines) {
    var strList = "<ol>";
    for (var counter = 0; counter < machines.length; counter++) {
        strList = strList + "<li>" + machines[counter].brandName + "</li>";
    }
    strList = strList + "</ol>";
    return strList;
}

console.log(createComputerOrderedList(computers));
document.getElementById('mylist').innerHTML = createComputerOrderedList(computers);
