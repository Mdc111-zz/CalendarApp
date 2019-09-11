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
        events: [],
        eventResize: function(event, delta, revertFunc, jsEvent, ui, view){
            if(confirm("Are you sure you want to resize this event ?")){
                handleResizeEvent(event.id, delta._data.hours, delta._data.minutes, GetHelipadNumberFromHtml());
            }else{
                revertFunc();
            }
        },
        eventOverlap: function(stillEvent, movingEvent) {
            return false;
        },
        eventClick: function(info){
            handleEventClickEvent(info);
        },
        eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
            if(confirm("Are you sure you want to move this event ?")){
                handleDroppedEvent(event.id, delta._data.days, delta._data.hours, delta._data.minutes, GetHelipadNumberFromHtml());
            }else{
                revertFunc();
            }
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        }
    });
});

function GetHelipadNumberFromHtml(){
    let helipadText = document.getElementById("dropbtn").innerHTML;
    let helipadNumberAsText = helipadText.substring(helipadText.indexOf(" ") + 1);
    return parseInt(helipadNumberAsText);
}