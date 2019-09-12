function handleDroppedEvent(eventId, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy, helipadNumber){
    var indexOfEventInArray = eventData.findIndex(x => x.id == eventId);
    eventData[indexOfEventInArray].start = calculateAdjustedTime(eventData[indexOfEventInArray].start, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    eventData[indexOfEventInArray].end = calculateAdjustedTime(eventData[indexOfEventInArray].end, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    eventData[indexOfEventInArray].column = helipadNumber - 1;
}