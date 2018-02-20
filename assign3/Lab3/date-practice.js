// var date = new Date();




// console.log("Year: " + date.getFullYear());
// console.log("Month: " + date.getMonth());
// console.log("Day: " + date.getDate());
// console.log("Hour: " + date.getHours());
// console.log("Minute: " + date.getMinutes());

// write a function "showDate" to return date as "2018/1/25"




function showDate() {
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = myDate.getMonth() + 1;
    let day = myDate.getDate();

    let strDate = "" + year + "/" + month + "/" + day;
    return strDate;
}

//alert(showDate());
console.log(showDate());