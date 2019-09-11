var eventId;

function handleEventClickEvent(event){
    if(document.getElementById("myForm2").style.display != "block")
        openForm2();

    console.log(dayEventData);
    eventId = event.id;
    var indexOfEventInArray = dayEventData.findIndex(x => x.id == event.id);
    var eventFromOurData = dayEventData[indexOfEventInArray];
    console.log(eventFromOurData);

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
    let indexOfWeekEventInArray;
    var indexOfDayEventInArray = dayEventData.findIndex(x => x.id == eventId);
    var eventFromOurData = dayEventData[indexOfDayEventInArray];
    let helipadFromOurData = eventFromOurData.column;
    let helipadFromInput = $("#myForm2 input[name=helipadnumber]").val() - 1;

    if(helipadFromOurData != helipadFromInput){
        console.log("hits not same helipad");

        removeElementFromArrayById(dayEventData, eventId);
        let newDayEventData = {
            id: eventFromOurData.id,
            title: $("#myForm2 input[name=title]").val(),
            start: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=starttime]").val(),
            end: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=endtime]").val(),
            helipadnumber: helipadFromInput,
            description: $("#myForm2 input[name=description]").val()
        }
        dayEventData.push(newDayEventData);
        $("#dayviewcalendar").fullCalendar('removeEvents');
        $("#dayviewcalendar").fullCalendar('addEventSource', dayEventData);
        
        if(helipadFromOurData == 0){
            weekEventDataHelipad1 = removeElementFromArrayById(weekEventDataHelipad1, eventId);
        }else if(helipadFromOurData == 1){
            weekEventDataHelipad2 = removeElementFromArrayById(weekEventDataHelipad2, eventId);
        }else if(helipadFromOurData == 2){
            weekEventDataHelipad3 = removeElementFromArrayById(weekEventDataHelipad3, eventId);
        }else if(helipadFromOurData == 3){
            weekEventDataHelipad4 = removeElementFromArrayById(weekEventDataHelipad4, eventId);
        }
        
        
        let weekEvent = {
            id: eventId,
            title: $("#myForm2 input[name=title]").val(),
            start: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=starttime]").val(),
            end: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=endtime]").val(),
            description: $("#myForm2 input[name=description]").val()
        }
        console.log(helipadFromInput);
        if(helipadFromInput == 0){
            weekEventDataHelipad1.push(weekEvent);
        }
        else if(helipadFromInput == 1){
            weekEventDataHelipad2.push(weekEvent);
        }
        else if(helipadFromInput == 2){
            weekEventDataHelipad3.push(weekEvent);
        }
        else if(helipadFromInput == 3){
            weekEventDataHelipad4.push(weekEvent);
        }

        var currentlySelectedHelipad = document.getElementById("dropbtn").innerHTML;

        if(currentlySelectedHelipad == "Select Helipad"){
          $("#weekviewcalendar").fullCalendar('removeEvents');
          $("#weekviewcalendar").fullCalendar('addEventSource', []);
        }
        else if(currentlySelectedHelipad == "Helipad 1"){
          $("#weekviewcalendar").fullCalendar('removeEvents');
          $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad1);
        }
        else if(currentlySelectedHelipad == "Helipad 2"){
          $("#weekviewcalendar").fullCalendar('removeEvents');
          $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad2);
        }
        else if(currentlySelectedHelipad == "Helipad 3"){
          $("#weekviewcalendar").fullCalendar('removeEvents');
          $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad3);
        }
        else if(currentlySelectedHelipad == "Helipad 4"){
          $("#weekviewcalendar").fullCalendar('removeEvents');
          $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad4);
        }
        //turn into function called rerender current view
        console.log(weekEventDataHelipad1);
        console.log(weekEventDataHelipad2);

        return;
    }

    let updatedWeekEvent = {
        id: 0,
        title: $("#myForm2 input[name=title]").val(),
        start: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=starttime]").val(),
        end: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=endtime]").val(),
        description: $("#myForm2 input[name=description]").val()
    }

    let updatedDayEvent = {
        id: 0,
        title: $("#myForm2 input[name=title]").val(),
        start: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=starttime]").val(),
        end: $("#myForm2 input[name=scheduledate]").val() + "T" + $("#myForm2 input[name=endtime]").val(),
        helipadnumber: helipadFromOurData,
        description: $("#myForm2 input[name=description]").val()
    }

    if(helipadFromOurData == 0){
        indexOfWeekEventInArray = weekEventDataHelipad1.findIndex(x => x.id == eventId);
        updatedWeekEvent.id = weekEventDataHelipad1[indexOfWeekEventInArray].id;
        weekEventDataHelipad1[indexOfWeekEventInArray] = updatedWeekEvent;
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad1);
    }
    else if(helipadFromOurData == 1){
        indexOfWeekEventInArray = weekEventDataHelipad2.findIndex(x => x.id == eventId);
        updatedWeekEvent.id = weekEventDataHelipad2[indexOfWeekEventInArray].id;
        weekEventDataHelipad2[indexOfWeekEventInArray] = updatedWeekEvent;
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad2);
    }
    else if(helipadFromOurData == 2){
        indexOfWeekEventInArray = weekEventDataHelipad3.findIndex(x => x.id == eventId);
        updatedWeekEvent.id = weekEventDataHelipad3[indexOfWeekEventInArray].id;
        weekEventDataHelipad3[indexOfWeekEventInArray] = updatedWeekEvent;
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad3);
    }
    else if(helipadFromOurData == 3){
        indexOfWeekEventInArray = weekEventDataHelipad4.findIndex(x => x.id == eventId);
        updatedWeekEvent.id = weekEventDataHelipad4[indexOfWeekEventInArray].id;
        weekEventDataHelipad4[indexOfWeekEventInArray] = updatedWeekEvent;
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad4);
    }

    updatedDayEvent.id = dayEventData[indexOfDayEventInArray];
    dayEventData[indexOfDayEventInArray] = updatedDayEvent;
    $("#dayviewcalendar").fullCalendar('removeEvents');
    $("#dayviewcalendar").fullCalendar('addEventSource', dayEventData);
}

function deleteEvent(){
    var indexOfDayEventInArray = dayEventData.findIndex(x => x.id == eventId);
    let indexOfWeekEventInArray;
    var eventFromOurData = dayEventData[indexOfDayEventInArray];

    if(eventFromOurData.column == 0){
        indexOfWeekEventInArray = weekEventDataHelipad1.findIndex(x => x.id == eventId);
        weekEventDataHelipad1 = removeElementFromArrayById(weekEventDataHelipad1, weekEventDataHelipad1[indexOfWeekEventInArray].id);
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad1);
    }
    else if(eventFromOurData.column == 1){
        indexOfWeekEventInArray = weekEventDataHelipad2.findIndex(x => x.id == eventId);
        weekEventDataHelipad2 = removeElementFromArrayById(weekEventDataHelipad2, weekEventDataHelipad2[indexOfWeekEventInArray].id);
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad2);
    }
    else if(eventFromOurData.column == 2){
        indexOfWeekEventInArray = weekEventDataHelipad3.findIndex(x => x.id == eventId);
        weekEventDataHelipad3 = removeElementFromArrayById(weekEventDataHelipad3, weekEventDataHelipad3[indexOfWeekEventInArray].id);
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad3);
    }
    else if(eventFromOurData.column == 3){
        indexOfWeekEventInArray = weekEventDataHelipad4.findIndex(x => x.id == eventId);
        weekEventDataHelipad4 = removeElementFromArrayById(weekEventDataHelipad4, weekEventDataHelipad4[indexOfWeekEventInArray].id);
        $("#weekviewcalendar").fullCalendar('removeEvents');
        $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad4);
    }

    dayEventData = removeElementFromArrayById(dayEventData, eventFromOurData.id)
    $("#dayviewcalendar").fullCalendar('removeEvents');
    $("#dayviewcalendar").fullCalendar('addEventSource', dayEventData);
    closeForm2();
}

function closeForm2(){
    document.getElementById("myForm2").style.display = "none";
}

function openForm2(){
    document.getElementById("myForm2").style.display = "block";
}

function removeElementFromArrayById(array, IdOfElement) {
    return array.filter(function(arrayElement){
        return arrayElement.id != IdOfElement;
    });
 }