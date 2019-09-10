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
        eventDurationEditable: true,
        events: dayEventData,
        eventResize: function(event, delta, revertFunc, jsEvent, ui, view){
            console.log("event resize hit");
            console.log(delta);
            //console.log(delta._data.minutes);
            //console.log(delta._data.hours);
        },
        eventClick: function(info){
            handleEventClickEvent(info);
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        }
    });
});