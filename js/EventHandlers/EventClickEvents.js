function handleEventClickEvent(clickedEventId){
    openDescriptionForm(clickedEventId);

    var indexOfEventInArray = eventData.findIndex(x => x.id == clickedEventId);
    var eventFromOurData = eventData[indexOfEventInArray];

    let date = eventFromOurData.start.substring(0, eventFromOurData.start.indexOf("T"));
    let startTime = eventFromOurData.start.substring(eventFromOurData.start.indexOf("T") + 1);
    let endTime = eventFromOurData.end.substring(eventFromOurData.end.indexOf("T") + 1);

    $("input[name=title]").val(eventFromOurData.title);
    $("input[name=scheduledate]").val(date);
    $("input[name=starttime]").val(startTime);
    $("input[name=endtime]").val(endTime);
    $("input[name=helipadnumber]").val(eventFromOurData.column + 1);
    $("input[name=description]").val(eventFromOurData.description);
}