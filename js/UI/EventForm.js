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
}

function handleDynamicSchedule(){
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
