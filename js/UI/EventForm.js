function toggleForm() {
    if(isFormOpen())
        closeForm();
    else
        openForm("EventForm");
  }
  
function isFormOpen(){
    return document.getElementById("myForm").style.display == "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm(formType) {
    document.getElementById("myForm").style.display = "block";

    if(formType == "EventForm"){
        openEventForm();
    }else{
        openDescriptionForm();
    }
    clearForm();
}

function submitEvent(){
    eventData.push({
        id: generateEventId(),
        title: $("input[name=title]").val(),
        start: $("input[name=scheduledate]").val() + "T" + $("input[name=starttime]").val(),
        end: $("input[name=scheduledate]").val() + "T" + $("input[name=endtime]").val(),
        column: (parseInt($("input[name=helipadnumber]").val()) - 1),
        description: $("input[name=description]").val()
    });
    let dataToRender = currentOpen == "#dayviewcalendar" ? eventData : currentlySelectedHelipad == 5 ? [] : filterArrayByHelipad(eventData, currentlySelectedHelipad);
    renderCalendarData(currentOpen, dataToRender);

    closeForm();
    clearForm();
}

function openEventForm(){
    document.getElementById("updateEventBtn").style.display = "none";
    document.getElementById("deleteEventBtn").style.display = "none";
    document.getElementById("submitEventBtn").style.display = "block";
    document.getElementById("resetFormBtn").style.display = "block";
}

function openDescriptionForm(){
    document.getElementById("updateEventBtn").style.display = "block";
    document.getElementById("deleteEventBtn").style.display = "block";
    document.getElementById("submitEventBtn").style.display = "none";
    document.getElementById("resetFormBtn").style.display = "none";
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
