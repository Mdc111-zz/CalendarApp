function calculateAdjustedTime(dateTime, days, hours, minutes){
    let date = new Date(dateTime);
    date.setDate(date.getDate() + days);
    date.setHours(date.getHours() + hours);
    date.setMinutes(date.getMinutes() + minutes);
    return formatDateTime(date);
}

function formatDateTime(date){
    return formatDate(date) + "T" + formatTime(date);
}

function formatDate(date){
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return date.getFullYear() + "-" + month + "-" + day
}

function formatTime(date){
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    return hour + ":" + minute + ":" + second;
}