let userAge = [];

let dateInput = document.querySelector('#date');

dateInput.addEventListener('input', () => {
    let ageDifference = [];
    userAge = new Date(dateInput.value);

    let userDay = userAge.getDate();
    let userMonth = userAge.getMonth() + 1;
    let userYear = userAge.getFullYear();
    
    let date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let dayDifference = day - userDay;
    ageDifference.push(dayDifference);

    let monthDifference = month - userMonth;
    ageDifference.push(monthDifference);

    let yearDifference = year - userYear;
    ageDifference.push(yearDifference);

    let dayDOM = document.createElement('h4');
    dayDOM.innerHTML = ("You've been alive " + dayDifference + " days, " + monthDifference + " months & " + yearDifference + " years.");
    document.body.appendChild(dayDOM);

});