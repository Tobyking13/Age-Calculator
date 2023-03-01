let dateInput = document.querySelector('#date');
dateInput.addEventListener('input', () => {
    let userAge = new Date(dateInput.value);
    let userYear = new Date(dateInput.value).getFullYear()
    
    if (userYear > 1111) {
        ageDif(userAge);
    }
});

let ageDif = function (userAge) {
    let today = new Date();
    let timeDiff = today.getTime() - userAge.getTime();
    const timeObj = {
        ms: Math.floor(timeDiff),
        seconds: Math.floor(timeDiff / 1000),
        minutes: Math.floor(timeDiff / (1000 * 60)),
        hours: Math.floor(timeDiff / (1000 * 60 * 60)),
        days: Math.floor(timeDiff / (1000 * 3600 * 24)),
        months: Math.floor(timeDiff / (1000 * 3600 * 24 * 12)),
        years: Math.floor(timeDiff / (1000 * 3600 * 24 * 365))
    }
    renderDate(timeObj);
}

function renderDate(timeObj) {
    let aliveStatement = document.createElement('h1').textContent = ("You have been alive for");
    //let ageDisplay = document.getElementById('age-display');
    document.body.append(aliveStatement);

    for (const [key, value] of Object.entries(timeObj)) {
        let dayDOM = document.createElement('h4');

        dayDOM.textContent = (`${key}: ${value}`);
        
        document.body.append(dayDOM);
        
    }
}