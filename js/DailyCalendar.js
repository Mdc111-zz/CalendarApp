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
        events: eventArr1,
        eventClick: function(info){
            alert("event clicked");
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        },
    });
});