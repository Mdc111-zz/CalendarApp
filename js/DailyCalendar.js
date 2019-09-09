$(document).ready(function() {
    document.getElementById("weekview").style.display = "none";
    $('#dayviewcalendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'multiColAgendaDay'
        },
        views: {
            multiColAgendaDay: {
                type: 'multiColAgenda',
                duration: { days: 1 },
                numColumns: 4,
                columnHeaders: ['Helipad One', 'Helipad Two', 'Helipad Three', 'Helipad Four']
            }
        },
        allDaySlot: false,
        defaultView: 'multiColAgendaDay',
        defaultDate: '2015-02-12',
        editable: true,
        events: eventArr1,
        eventClick: function(info){
            alert("event clicked");
        },
        dayClick: function(date, jsEvent, view){
            if(document.getElementById("myForm").style.display != "block")
                openForm();

            var dateAndTimeArray = date.format().toString().split("T");
            var dateClicked = dateAndTimeArray[0];
            var timeClicked = dateAndTimeArray[1];

            $("input[name=scheduledate]").val(dateClicked);
            $("input[name=starttime]").val(timeClicked);
        },
    });
});


//$(window).click(function(event) {
    //if (!event.target.matches('.dropbtn')) {
    //    document.getElementsByClassName(".dropbtn").style.display = "none";
    //}
//});

function showHelipadDropdown(){
    document.getElementById("myDropdown").style.display = "block";
}

function toggleDisplay() {
    if(document.getElementById("myDropdown").style.display == "block")
      document.getElementById("myDropdown").style.display = "none";
    else
      document.getElementById("myDropdown").style.display = "block";
}
  
function updateCurrentHelipadText(currentlySelectedItem){
    document.getElementById("testid").innerHTML = currentlySelectedItem;
}