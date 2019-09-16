function DoTimesOverlap(eventId, startTime, endTime, eventsToCompareAgainst){
    let startTimeAsMoment = moment(startTime);
    let endTimeAsMoment = moment(endTime);

    for(var i = 0; i < eventsToCompareAgainst.length; i++){
        if(eventsToCompareAgainst[i].id == eventId)
            continue;

        if(startTime == eventsToCompareAgainst[i].end || endTime == eventsToCompareAgainst[i].start)
            return false;
           
        let elementStartTimeAsMovement = moment(eventsToCompareAgainst[i].start);
        let elementEndTimeAsMovement = moment(eventsToCompareAgainst[i].end);

        if((startTimeAsMoment.isBefore(elementEndTimeAsMovement) && startTimeAsMoment.isAfter(elementStartTimeAsMovement))
            || (endTimeAsMoment.isBefore(elementEndTimeAsMovement) && endTimeAsMoment.isAfter(elementStartTimeAsMovement))
            || (startTimeAsMoment.isBefore(elementStartTimeAsMovement) && endTimeAsMoment.isAfter(elementEndTimeAsMovement))
            || (startTimeAsMoment.isSame(elementStartTimeAsMovement) && endTimeAsMoment.isSame(elementEndTimeAsMovement)))
        {
            return true;
        }
    }
    return false;
}
