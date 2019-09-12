var eventId;

function handleEventClickEvent(event){
    if(document.getElementById("myForm2").style.display != "block")
        openForm2();

    eventId = event.id;
    var indexOfEventInArray = eventData.findIndex(x => x.id == event.id);
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
        title: $("#myForm2 input[name=title]").val(),
        start: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=starttime]").val(),
        end: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=endtime]").val(),
        column: $("#myForm2 input[name=helipadnumber]").val() - 1,
        description: $("#myForm2 input[name=description]").val()
    });

    if(currentOpen == "dayview"){
        $("#dayviewcalendar").fullCalendar('removeEvents');
        $("#dayviewcalendar").fullCalendar('addEventSource', eventData);
    }else if(currentOpen == "weekview"){
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', filterArrayByHelipad(eventData, GetHelipadNumberFromDropDown() - 1));
    }
}


function deleteEvent(){
    let helipadNumber = eventData[eventData.findIndex(x => x.id == eventId)].column;
    eventData = removeElementFromArrayById(eventData, eventId);

    if(currentOpen == "dayview"){
        $("#dayviewcalendar").fullCalendar('removeEvents');
        $("#dayviewcalendar").fullCalendar('addEventSource', eventData);
    }else{
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', filterArrayByHelipad(eventData, helipadNumber));
    }

    closeForm2();
}

function closeForm2(){
    document.getElementById("myForm2").style.display = "none";
}

function openForm2(){
    document.getElementById("myForm2").style.display = "block";
}