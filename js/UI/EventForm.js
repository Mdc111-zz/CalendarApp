function toggleForm() {
    if(document.getElementById("myForm").style.display == "block")
        closeForm();
    else
        openForm();
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function handleDynamicSchedule(){
    var title = $("input[name=title]").val();
    var dateOfSchedule = $("input[name=scheduledate]").val();
    var startTime = $("input[name=starttime]").val();
    var endTime = $("input[name=endtime]").val();
    var helipadNumber = parseInt($("input[name=helipadnumber]").val());
    var description = $("input[name=description]").val();

    var dayEvent = {
        id: generateEventId(),
        title: title,
        start: dateOfSchedule + "T" + startTime,
        end: dateOfSchedule + "T" + endTime,
        column: (helipadNumber - 1),
        description: description
    };

    var weekEvent = {
        id: generateEventId(),
        title: title,
        start: dateOfSchedule + "T" + startTime,
        end: dateOfSchedule + "T" + endTime,
        description: description
    };
    if(helipadNumber == 1){
        weekEventDataHelipad1.push(weekEvent);
    }
    else if(helipadNumber == 2){
        weekEventDataHelipad2.push(weekEvent);
    }
    else if(helipadNumber == 3){
        weekEventDataHelipad3.push(weekEvent);
    }
    else if(helipadNumber == 4){
        weekEventDataHelipad4.push(weekEvent);
    }
    dayEventData.push(dayEvent)

    if(currentOpen == "dayview"){
        $("#dayviewcalendar").fullCalendar('removeEvents');
        $("#dayviewcalendar").fullCalendar('addEventSource', dayEventData);
    }else if(currentOpen == "weekview"){
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
    closeForm();
    clearForm();
}

function clearForm(){
    $("input[name=title]").val("");
    $("input[name=scheduledate]").val("");
    $("input[name=starttime]").val("");
    $("input[name=endtime]").val("");
    $("input[name=helipadnumber]").val("");
    $("input[name=description]").val("");
}

function generateEventId(){
    return Math.floor(Math.random() * Math.floor(1000000));
}
