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

    var event = {
        title: title,
        start: dateOfSchedule + "T" + startTime,
        end: dateOfSchedule + "T" + endTime,
        column: helipadNumber,
        description: description
    };

    eventArr1.push(event);
    $('#dayviewcalendar').fullCalendar('renderEvent', event);
}