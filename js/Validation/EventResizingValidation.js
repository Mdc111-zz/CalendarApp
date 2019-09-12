function isValidResize(eventId){
    let indexOfEventInArray = weekEventDataHelipad1.findIndex(x => x.id == eventId);
    let helipadOfEvent = dayEventData[indexOfEventInArray].column;
    let eventTimeRange = moment.range(dayEventData[indexOfEventInArray].start, dayEventData[indexOfEventInArray].end);
    
    for(var i = 0; i < dayEventData.length; i++){
        if(dayEventData[i].id == event.id || dayEventData[i].column != helipadOfEvent)
            continue;

        let elementTimeRange = moment.range(dayEventData[i].start, dayEventData[i].end);
        if(eventTimeRange.overlaps(elementTimeRange))
            return true;
    }
    return false;
}