function validateFormInput(title, startTime, endTime, column){
    let validationErrors = [];

    let titleErrors = validateTitle(title);
    let timeErrors = validateEventTimes(startTime, endTime);
    let columnErrors = validateColumn(column);

    if(titleErrors)
        validationErrors.push(titleErrors);

    if(timeErrors.length != 0)
        Array.prototype.push.apply(validationErrors, timeErrors);

    if(columnErrors)
        validationErrors.push(columnErrors);

    console.log(validationErrors);

    return validationErrors;
}

function validateTitle(title){
    if(!title)
        return "incorrect title input"
    return "";
}

function validateEventTimes(startTime, endTime){
    var timeErrors = [];

    if(moment(startTime).isAfter(endTime))
        timeErrors.push("start time must be before end time");

    if(!moment(startTime).isValid())
        timeErrors.push("start time is an invalid time")

    if(!moment(endTime).isValid())
        timeErrors.push("end time is an invalid time")

    return timeErrors;
}

function validateColumn(column){
    if(column < 0 || column > 4)
        return "incorrect column input - input number from 1 to 4";
    return "";
}