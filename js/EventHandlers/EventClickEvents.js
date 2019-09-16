var eventId;

function handleEventClickEvent(clickedEventId){
    openForm("DescriptionForm");

    eventId = clickedEventId;
    var indexOfEventInArray = eventData.findIndex(x => x.id == eventId);
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

function updateEvent(){
    eventData = removeElementFromArrayById(eventData, eventId);

    eventData.push({
        id: eventId,
        title: $("input[name=title]").val(),
        start: $("input[name=scheduledate]").val() + "T" + $("input[name=starttime]").val(),
        end: $("input[name=scheduledate]").val() + "T" + $("input[name=endtime]").val(),
        column: $("input[name=helipadnumber]").val() - 1,
        description: $("input[name=description]").val()
    });

    let dataToRender = currentOpen == "#dayviewcalendar" ? eventData : filterArrayByHelipad(eventData, GetHelipadNumberFromDropDown() - 1);
    renderCalendarData(currentOpen, dataToRender);
}


function deleteEvent(){
    let helipadNumber = eventData[eventData.findIndex(x => x.id == eventId)].column;
    eventData = removeElementFromArrayById(eventData, eventId);

    let dataToRender = currentOpen == "#dayviewcalendar" ? eventData : filterArrayByHelipad(eventData, helipadNumber);
    renderCalendarData(currentOpen, dataToRender);

    closeForm2();
}