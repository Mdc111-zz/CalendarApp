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
        editable: true,
        events: dayEventData,
        eventResize: function(event, delta, revertFunc, jsEvent, ui, view){
            if(confirm("Are you sure you want to resize this event ?")){
                handleResizeEvent(event.id, delta._data.hours, delta._data.minutes);
            }else{
                revertFunc();
            }
        },
        eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
            if(confirm("Are you sure you want to move this event ?")){
                handleDroppedEvent(event.id, delta._data.days, delta._data.hours, delta._data.minutes, (event.column+1));
            }else{
                revertFunc();
            }
        },
        eventClick: function(event, jsEvent, view){
            handleEventClickEvent(event);
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        }
    });
});