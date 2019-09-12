function handleResizeEvent(eventId, hoursResizedBy, minutesResizedBy, helipadNumber){
    if(helipadNumber == 1){
        var indexOfEventInArray = weekEventDataHelipad1.findIndex(x => x.id == eventId);
        weekEventDataHelipad1[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad1[indexOfEventInArray].end, 0, hoursResizedBy, minutesResizedBy);;
        console.log(weekEventDataHelipad1[indexOfEventInArray]);
    }
    else if(helipadNumber == 2){
        var indexOfEventInArray = weekEventDataHelipad2.findIndex(x => x.id == eventId);
        weekEventDataHelipad2[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad2[indexOfEventInArray].end, 0, hoursResizedBy, minutesResizedBy);;
    }
    else if(helipadNumber == 3){
        var indexOfEventInArray = weekEventDataHelipad3.findIndex(x => x.id == eventId);
        weekEventDataHelipad3[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad3[indexOfEventInArray].end, 0, hoursResizedBy, minutesResizedBy);
    }
    else if(helipadNumber == 4){
        var indexOfEventInArray = weekEventDataHelipad4.findIndex(x => x.id == eventId);
        weekEventDataHelipad4[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad4[indexOfEventInArray].end, 0, hoursResizedBy, minutesResizedBy);
    }
    var indexOfEventInArray = dayEventData.findIndex(x => x.id == eventId);
    dayEventData[indexOfEventInArray].end = calculateAdjustedTime(dayEventData[indexOfEventInArray].end, 0, hoursResizedBy, minutesResizedBy);
    console.log(dayEventData[indexOfEventInArray]);
}