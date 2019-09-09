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
        events: eventArr1,
        eventClick: function(info){
            alert("event clicked");
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        }
    });
});

function showHelipadDropdown(){
    document.getElementById("myDropdown").style.display = "block";
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
}

function wasDropDownClicked(){
    return (!event.target.matches('.myDropdown') && !event.target.matches('.dropbtn'));
}