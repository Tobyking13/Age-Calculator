let dateInput = document.querySelector('#date');
dateInput.addEventListener('input', () => {
    let userAge = new Date(dateInput.value);
    let userYear = new Date(dateInput.value).getFullYear();
    
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
    let aliveStatement = $('<h2>').text('You have been alive for: ');
    $('#age-display').append(aliveStatement)
    for (const [key, value] of Object.entries(timeObj)) {
        let dayDOM = document.createElement('h4');
        dayDOM.textContent = (`${key}: ${value}`);
        $('#age-display').append(dayDOM);
    }
}

$('#light-dark-switch').click(function() {
    const isLightTheme = $('html').attr('data-theme') === 'light'; 
    $('html').attr('data-theme', isLightTheme ? 'dark' : 'light');
    $('#light-dark-switch').text(isLightTheme ? 'Light Mode' : 'Dark Mode');
    $('#light-dark-switch').attr('class', isLightTheme ? 'contrast outline' : 'contrast');
    $('nav').css('border-bottom', isLightTheme ? '1px solid rgb(227, 227, 227)' : '1px solid rgb(152, 152, 152)');
})