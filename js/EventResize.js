function handleResizeEvent(event, delta){
    var idOfResizedEvent = event.id;
    var helipadNumber = event.column + 1;
    var date = event.end._i.substring(0, event.end._i.indexOf("T"));
    var minutesResizedBy = delta._data.minutes;
    var hoursResizedBy = delta._data.hours;

    if(helipadNumber == 1){
        var indexOfEventInArray = weekEventDataHelipad1.findIndex(x => x.id == idOfResizedEvent);
        var newEndTime = calculateNewTime(weekEventDataHelipad1[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad1[indexOfEventInArray].end = newEndTime;

    }
    else if(helipadNumber == 2){
        var indexOfEventInArray = weekEventDataHelipad2.findIndex(x => x.id == idOfResizedEvent);
        var newEndTime = calculateNewTime(weekEventDataHelipad2[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad2[indexOfEventInArray].end = newEndTime;
    }
    else if(helipadNumber == 3){
        var indexOfEventInArray = weekEventDataHelipad3.findIndex(x => x.id == idOfResizedEvent);
        var newEndTime = calculateNewTime(weekEventDataHelipad3[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad3[indexOfEventInArray].end = newEndTime;
    }
    else if(helipadNumber == 4){
        var indexOfEventInArray = weekEventDataHelipad4.findIndex(x => x.id == idOfResizedEvent);
        var newEndTime = calculateNewTime(weekEventDataHelipad4[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad4[indexOfEventInArray].end = newEndTime;
    }
    var indexOfEventInArray = dayEventData.findIndex(x => x.id == idOfResizedEvent);
    var newEndTime = calculateNewTime(dayEventData[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
    dayEventData[indexOfEventInArray].end = newEndTime;
}

function calculateNewTime(oldEndTime, date, minutes, hours){
    return "2019-09-09T14:00:00";
}