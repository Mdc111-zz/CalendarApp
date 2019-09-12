function handleResizeEvent(eventId, hoursResizedBy, minutesResizedBy, helipadNumber){
    var indexOfEventInArray = eventData.findIndex(x => x.id == eventId);
    eventData[indexOfEventInArray].end = calculateAdjustedTime(eventData[indexOfEventInArray].end, 0, hoursResizedBy, minutesResizedBy);
}