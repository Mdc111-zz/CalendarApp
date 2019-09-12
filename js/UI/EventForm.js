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

    eventData.push(dayEvent)

    if(currentOpen == "dayview"){
        $("#dayviewcalendar").fullCalendar('removeEvents');
        $("#dayviewcalendar").fullCalendar('addEventSource', eventData);
    }else if(currentOpen == "weekview"){
        let currentlySelectedHelipad = GetHelipadNumberFromDropDown() - 1;

        if(currentlySelectedHelipad == "Select Helipad"){
          $("#weekviewcalendar").fullCalendar('removeEvents');
          $("#weekviewcalendar").fullCalendar('addEventSource', []);
        }
        else{
          $("#weekviewcalendar").fullCalendar('removeEvents');
          $("#weekviewcalendar").fullCalendar('addEventSource', filterArrayByHelipad(eventData, currentlySelectedHelipad));
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
