function handleDayClickEvent(date){
    if(document.getElementById("myForm").style.display != "block")
        openForm();

    var dateAndTimeArray = date.format().toString().split("T");
    var dateClicked = dateAndTimeArray[0];
    var timeClicked = dateAndTimeArray[1];

    $("input[name=scheduledate]").val(dateClicked);
    $("input[name=starttime]").val(timeClicked);
}