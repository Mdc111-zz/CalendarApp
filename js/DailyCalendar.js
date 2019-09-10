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
            handleResizeEvent(event, data);
        },
        eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
            console.log(delta);
            console.log(event);
        },
        eventClick: function(info){
            handleEventClickEvent(info);
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        }
    });
});

