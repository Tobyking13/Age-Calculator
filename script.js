let userAge = [13, 04, 1991];
let ageDifference = [];


let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let ageFunction = function (arr) {
    
    let dateDifference = day - arr[0];
    ageDifference.push(dateDifference);

    let monthDifference = month - arr[1];
    ageDifference.push(monthDifference);
    
    let yearDifference = year - arr[2];
    ageDifference.push(yearDifference);
};

ageFunction(userAge);
console.log(ageDifference);