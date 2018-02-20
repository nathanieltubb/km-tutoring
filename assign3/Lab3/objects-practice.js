class Dog {
    constructor(name, age, breed, price) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.price = price;
    }

    // show dog's price with in $
    showPrice() {
        return "$" + this.price;
    }

    // display info about the dog
    toString() {
        let strInfo = "";
        strInfo = strInfo + "  Name : " + this.name;
        strInfo = strInfo + "  Age : " + this.age;
        strInfo = strInfo + "  Breed : " + this.breed;
        strInfo = strInfo + "  Price : " + this.price;

        return strInfo;
    }
}

// let us create a few dogs
var rex = new Dog("Rex", 3, "Shepherd", 2000);
var frank = new Dog("Frank", 2, "Collie", 1000);
var alice = new Dog("Alice", 1, "Poodle", 500);
var tom = new Dog("Tom", 8, "Lab", 5000);

// show rex and tom
console.log(rex.toString());
console.log(tom.toString());

// show rex and tom prices
console.log(rex.showPrice());
console.log(tom.showPrice());

// create an array from all dogs
var dogs = [];
dogs.push(rex);
dogs.push(frank);
dogs.push(alice);
dogs.push(tom);

// display number of dogs
console.log(dogs.length);

// write a loop displaying all dogs
for (let index = 0; index < dogs.length; index++) {
    console.log(dogs[index].toString());
}

// create an HTML table containing all dogs

function createDogsHTMLTable(animals) {
    var strTable;
    strTable = '<table border= "1" >';
    for (var index = 0; index < animals.length; index++) {
        strTable = strTable + "<tr>";
        strTable = strTable + "<td>" + animals[index].name + "</td>";
        strTable = strTable + "<td>" + animals[index].age + "</td>";
        strTable = strTable + "<td>" + animals[index].breed + "</td>";
        strTable = strTable + "<td>" + animals[index].price + "</td>";

        strTable = strTable + "</tr>";
    }
    strTable = strTable + '</table>';
    return strTable;
}

//document.getElementById('mytable').innerHTML = strTable;
document.getElementById('mytable').innerHTML = createDogsHTMLTable(dogs);
//console.log(strTable);

var jim = new Dog("Jim", 22, "human", 3333);
var joe = new Dog("Joe", 52, "lion", 3);
var puppies = [];
puppies.push(jim);
puppies.push(joe);
document.getElementById('mytable').innerHTML = createDogsHTMLTable(puppies);











