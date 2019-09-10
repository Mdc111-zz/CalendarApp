$(document).ready(function() {
    $('#weekviewcalendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek'
        },
        allDaySlot: false,
        defaultView: 'agendaWeek',
        editable: true,
        events: [],
        eventResize: function(event, delta, revertFunc, jsEvent, ui, view){
            handleResizeEvent(event, data);
        },
        eventOverlap: function(stillEvent, movingEvent) {
            return false;
        },
        eventClick: function(info){
            handleEventClickEvent(info);
        },
        eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
            console.log(event);
            console.log(delta);
            var idOfEventBeingMoved = event.id;
            var minutesAdjustedBy = delta._data.minutes;
            var hoursAdjustedBy = delta._data.hours;
            var daysAdjustedBy = delta._data.days;
            handleDroppedEvent(event, delta);
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        }
    });
});

function handleDroppedEvent(event, delta){
    console.log("hitting handle dropped event");
    var idOfResizedEvent = event.id;
    var helipadNumber = event.column + 1;
    var startDate = event.start._i;
    var minutesAdjustedBy = delta._data.minutes;
    var hoursAdjustedBy = delta._data.hours;
    var daysAdjustedBy = delta._data.days;

    console.log("line before function call");
    console.log(daysAdjustedBy);
    console.log(hoursAdjustedBy);
    console.log(minutesAdjustedBy);
    calculateAdjustedTime(startDate, daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);
    //calculateNewTime("2019-09-09T10:30:00", daysAdjustedBy, hoursAdjustedBy, minutesAdjustedBy);

    /*
    if(helipadNumber == 1){
        var indexOfEventInArray = weekEventDataHelipad1.findIndex(x => x.id == idOfResizedEvent);
        var newStartTime = calculateNewTime(weekEventDataHelipad1[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        var newEndTime = calculateNewTime(weekEventDataHelipad1[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad1[indexOfEventInArray].end = newEndTime;
    }
    else if(helipadNumber == 2){
        var indexOfEventInArray = weekEventDataHelipad2.findIndex(x => x.id == idOfResizedEvent);
        var newEndTime = calculateNewTime(weekEventDataHelipad2[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad2[indexOfEventInArray].end = newEndTime;
    }
    else if(helipadNumber == 3){
        var indexOfEventInArray = weekEventDataHelipad3.findIndex(x => x.id == idOfResizedEvent);
        var newEndTime = calculateNewTime(weekEventDataHelipad3[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad3[indexOfEventInArray].end = newEndTime;
    }
    else if(helipadNumber == 4){
        var indexOfEventInArray = weekEventDataHelipad4.findIndex(x => x.id == idOfResizedEvent);
        var newEndTime = calculateNewTime(weekEventDataHelipad4[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
        weekEventDataHelipad4[indexOfEventInArray].end = newEndTime;
    }
    var indexOfEventInArray = dayEventData.findIndex(x => x.id == idOfResizedEvent);
    var newStartTime = calculateNewTime(dayEventData[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
    var newEndTime = calculateNewTime(dayEventData[indexOfEventInArray].end, date, minutesResizedBy, hoursResizedBy);
    dayEventData[indexOfEventInArray].start = newStartTime;
    dayEventData[indexOfEventInArray].end = newEndTime;*/
}

function calculateAdjustedTime(dateTime, days, hours, minutes){
    console.log("hit calculate new time");
    //var startDate = dateTime.substring(0, dateTime.indexOf("T"));
    //var startTime = dateTime.substring(dateTime.indexOf("T") + 1);

    console.log("test: " + dateTime);
    var date = new Date(dateTime);
    console.log(date);
    date.setDate(date.getDate() + days);
    console.log(date);
/*
    var day = startDate.substring(startDate.lastIndexOf("-") + 1);
    var month = startDate.substring(startDate.indexOf("-"), startDate.lastIndexOf("-"));
    var year = startDate.substring(0, startDate.indexOf("-"));

    var minute = startTime.substring(startTime.indexOf("-"), startTime.lastIndexOf("-")) + minutes;
    var hour = startTime.substring(0, startTime.indexOf("-")) + hours;

    return year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second;*/
}

function toggleHelipadDropDown() {
    if(isHelipadDropDownOpen())
        closeHelipadDropDown();
    else
        openHelipadDropDown();
}

function isHelipadDropDownOpen(){
    return document.getElementById("myDropdown").style.display == "block"
}

function openHelipadDropDown(){
    document.getElementById("myDropdown").style.display = "block";
}

function closeHelipadDropDown(){
    document.getElementById("myDropdown").style.display = "none";
}

function updateSelectedHelipad(helipadNumber){
    document.getElementById("dropbtn").innerHTML = helipadNumber;
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
}