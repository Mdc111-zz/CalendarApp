function toggleForm() {
    if(isFormOpen())
        closeForm();
    else
        openForm();
} 
  
function isFormOpen(){
    return document.getElementById("myForm").style.display == "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    openEventForm();
}

function submitEvent(){
    let title = $("input[name=title]").val();
    let scheduledate = $("input[name=scheduledate]").val();
    let startTime = $("input[name=starttime]").val();
    let endTime = $("input[name=endtime]").val();
    let column = parseInt($("input[name=helipadnumber]").val());

    let validationErrors = validateFormInput(title, scheduledate, startTime, endTime, column);
    if(validationErrors.length > 0){
        let errorMessage = "Some of the input on the form is incorrect: \n";
        for(var i = 0; i < validationErrors.length; i++){
            errorMessage += (validationErrors[i] + "\n");
        }
        alert(errorMessage);
        return;
    }

    eventData.push({
        id: generateEventId(),
        title: title,
        start: scheduledate + "T" + startTime,
        end: scheduledate + "T" + endTime,
        column: column - 1,
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