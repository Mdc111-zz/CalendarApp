var currentlySelectedEvent;

function openDescriptionForm(eventId){
    currentlySelectedEvent = eventId;
    document.getElementById("updateEventBtn").style.display = "block";
    document.getElementById("deleteEventBtn").style.display = "block";
    document.getElementById("submitEventBtn").style.display = "none";
    document.getElementById("resetFormBtn").style.display = "none";
}

function updateEvent(){
    let title = $("input[name=title]").val();
    let startTime = $("input[name=scheduledate]").val() + "T" + $("input[name=starttime]").val();
    let endTime = $("input[name=scheduledate]").val() + "T" + $("input[name=endtime]").val();
    let column = (parseInt($("input[name=helipadnumber]").val()) - 1);

    let validationErrors = validateFormInput(title, startTime, endTime, column);
    if(validationErrors.length > 0){
        let errorMessage = "Some of the input on the form is incorrect: \n";
        for(var i = 0; i < validationErrors.length; i++){
            errorMessage += (validationErrors[i] + "\n");
        }
        alert(errorMessage);
        return;
    }

    eventData = removeElementFromArrayById(eventData, currentlySelectedEvent);
    eventData.push({
        id: currentlySelectedEvent,
        title: title,
        start: startTime,
        end: endTime,
        column: column,
        description: $("input[name=description]").val()
    });

    let dataToRender = currentOpen == "#dayviewcalendar" ? eventData : filterArrayByHelipad(eventData, GetHelipadNumberFromDropDown() - 1);
    renderCalendarData(currentOpen, dataToRender);
}


function deleteEvent(){
    let helipadNumber = eventData[eventData.findIndex(x => x.id == currentlySelectedEvent)].column;
    eventData = removeElementFromArrayById(eventData, currentlySelectedEvent);

    let dataToRender = currentOpen == "#dayviewcalendar" ? eventData : filterArrayByHelipad(eventData, helipadNumber);
    renderCalendarData(currentOpen, dataToRender);

    closeForm();
}