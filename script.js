$('#date').click(function() {
    let userAge = "";
    let userYear = "";
    let timeObj = {};
    $('#date').val("");
    $('#date').on('input', () => {
        userAge = new Date($('#date').val());
        userYear = new Date($('#date').val()).getFullYear();
        if (userYear > 1111) {
            $('#age-display').text("");
            ageDif(userAge, timeObj);
            userAge = userAge.toLocaleDateString('en-US');
            timeAlive(userAge);
        }
    });
})

let ageDif = function (userAge, timeObj) {
    let today = new Date();
    let timeDiff = today.getTime() - userAge.getTime();
    timeObj = {
        milliseconds: Math.floor(timeDiff),
        seconds: Math.floor(timeDiff / 1000),
        minutes: Math.floor(timeDiff / (1000 * 60)),
        hours: Math.floor(timeDiff / (1000 * 60 * 60)),
        days: Math.floor(timeDiff / (1000 * 3600 * 24)),
        months: Math.floor(timeDiff / (1000 * 3600 * 24 * 12)),
        years: Math.floor(timeDiff / (1000 * 3600 * 24 * 365)),
    }
    renderDate(timeObj);
}

function timeAlive(userAge) {
    const todayEpoch = new Date().getTime();
    const birthEpoch = Date.parse(userAge);
    const epochDifference = todayEpoch - birthEpoch;
    const date = new Date(epochDifference);
    const years = (date.getFullYear() - 1970);
    const months = date.getMonth() - 1;
    const days = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dayWord = days === 1 ? 'day' : 'days';
    const dateAlive = $('<h5>').text(`${years} years, ${months} months, ${days} ${dayWord}, ${hours} hours, ${minutes} minutes & ${seconds} seconds`);
    $('#age-display').append(dateAlive);
}

function renderDate(timeObj) {
    let aliveStatement = $('<h2>').text('You have been alive for: ');
    $('#age-display').append(aliveStatement);
    for (const [key, value] of Object.entries(timeObj)) {
        let dayDOM = $('<h4>').text(`${value.toLocaleString('en-US')} ${key}`)
        $('#age-display').append(dayDOM);
    }
}

$('#light-dark-switch').click(function() {
    const isLightTheme = $('html').attr('data-theme') === 'light'; 
    $('html').attr('data-theme', isLightTheme ? 'dark' : 'light');
    $('#light-dark-switch').text(isLightTheme ? 'Light Mode' : 'Dark Mode');
    $('#light-dark-switch').attr('class', isLightTheme ? 'outline' : 'contrast');
    $('nav').css('border-bottom', isLightTheme ? '1px solid rgb(227, 227, 227)' : '1px solid rgb(152, 152, 152)');
})