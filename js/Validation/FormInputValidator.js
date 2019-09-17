function validateFormInput(title, scheduledTime, startTime, endTime, column){
    let validationErrors = [];
    let templateDate = "2019-09-03T";
    let startDate = templateDate + startTime;
    let endDate = templateDate + endTime;

    let titleErrors = validateTitle(title);
    let scheduleTimeErrors = validateScheduledTime(scheduledTime);
    let startTimeValidationResponse = validateStartTime(startDate);
    let endTimeValidationResponse = validateEndTime(endDate);
    let overlappingTimeErrors = validateTimesNotOverlapping(startTime, endTime);
    let columnErrors = validateColumn(column);

    if(titleErrors)
        validationErrors.push(titleErrors);

    if(scheduleTimeErrors)
        validationErrors.push(scheduleTimeErrors);

    if(startTimeValidationResponse)
        validationErrors.push(startTimeValidationResponse);

    if(endTimeValidationResponse)
        validationErrors.push(endTimeValidationResponse);
        
    if(overlappingTimeErrors)
        validationErrors.push(overlappingTimeErrors);

    if(columnErrors)
        validationErrors.push(columnErrors);

    return validationErrors;
}

function validateTitle(title){
    if(!title)
        return "incorrect title input"
    return "";
}

function validateScheduledTime(scheduledTime){
    if(!moment(scheduledTime).isValid())
        return "scheduled date is an invalid date";
    return "";
}

function validateStartTime(startTime){
    if(!moment(startTime).isValid())
        return "start time is an invalid time";
    return "";
}

function validateEndTime(endTime){
    if(!moment(endTime).isValid())
        return "end time is an invalid time";
    return "";
}

function validateTimesNotOverlapping(startTime, endTime){
    if(moment(startTime).isAfter(endTime) || moment(startTime).isSame(endTime))
        return "start time must be before end time";
    return "";
}

function validateColumn(column){
    if(column < 1 || column > 4)
        return "incorrect column input - input number from 1 to 4";
    return "";
}