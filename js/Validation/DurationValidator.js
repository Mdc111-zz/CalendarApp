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
        let isStartTimeInsideTimeRange = (startTimeAsMoment.isBefore(elementEndTimeAsMovement) && startTimeAsMoment.isAfter(elementStartTimeAsMovement));
        let isEndTimeInsideTimeRange = (endTimeAsMoment.isBefore(elementEndTimeAsMovement) && endTimeAsMoment.isAfter(elementStartTimeAsMovement));
        let isTimeSpanOverOtherEvent = (startTimeAsMoment.isBefore(elementStartTimeAsMovement) && endTimeAsMoment.isAfter(elementEndTimeAsMovement));
        let isStartAndEndTheSame = (startTimeAsMoment.isSame(elementStartTimeAsMovement) && endTimeAsMoment.isSame(elementEndTimeAsMovement));

        if(isStartTimeInsideTimeRange || isEndTimeInsideTimeRange || isTimeSpanOverOtherEvent || isStartAndEndTheSame)
            return true;
    }
    return false;
}
