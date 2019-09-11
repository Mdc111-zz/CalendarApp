function handleDroppedEvent(eventId, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy, helipadNumber){
    if(helipadNumber == 1){
        var indexOfEventInArray = weekEventDataHelipad1.findIndex(x => x.id == eventId);
        weekEventDataHelipad1[indexOfEventInArray].start = calculateAdjustedTime(weekEventDataHelipad1[indexOfEventInArray].start, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
        weekEventDataHelipad1[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad1[indexOfEventInArray].end, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
        console.log(weekEventDataHelipad1[indexOfEventInArray]);
    }
    else if(helipadNumber == 2){
        var indexOfEventInArray = weekEventDataHelipad2.findIndex(x => x.id == eventId);
        weekEventDataHelipad2[indexOfEventInArray].start = calculateAdjustedTime(weekEventDataHelipad2[indexOfEventInArray].start, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
        weekEventDataHelipad2[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad2[indexOfEventInArray].end, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    }
    else if(helipadNumber == 3){
        var indexOfEventInArray = weekEventDataHelipad3.findIndex(x => x.id == eventId);
        weekEventDataHelipad3[indexOfEventInArray].start = calculateAdjustedTime(weekEventDataHelipad3[indexOfEventInArray].start, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
        weekEventDataHelipad3[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad3[indexOfEventInArray].end, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    }
    else if(helipadNumber == 4){
        var indexOfEventInArray = weekEventDataHelipad4.findIndex(x => x.id == eventId);
        weekEventDataHelipad4[indexOfEventInArray].start = calculateAdjustedTime(weekEventDataHelipad4[indexOfEventInArray].start, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
        weekEventDataHelipad4[indexOfEventInArray].end = calculateAdjustedTime(weekEventDataHelipad4[indexOfEventInArray].end, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    }
    var indexOfEventInArray = dayEventData.findIndex(x => x.id == eventId);
    dayEventData[indexOfEventInArray].start = calculateAdjustedTime(dayEventData[indexOfEventInArray].start, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    dayEventData[indexOfEventInArray].end = calculateAdjustedTime(dayEventData[indexOfEventInArray].end, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    dayEventData[indexOfEventInArray].column = helipadNumber - 1;
    console.log(dayEventData[indexOfEventInArray]);
}