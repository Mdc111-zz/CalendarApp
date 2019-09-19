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
        eventOverlap: function(stillEvent, movingEvent) {
            return false;
        },
        eventResize: function(event, delta, revertFunc, jsEvent, ui, view){
            if(confirm("Are you sure you want to resize this event ?")){
                handleResizeEvent(event.id, delta._data.hours, delta._data.minutes);
            }else{
                revertFunc();
            }
        },
        eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
            if(confirm("Are you sure you want to move this event ?")){
                handleDroppedEvent(event.id, delta._data.days, delta._data.hours, delta._data.minutes);
            }else{
                revertFunc();
            }
        },
        eventClick: function(event, jsEvent, view){
            handleEventClickEvent(event.id);
        },
        dayClick: function(date, jsEvent, view){
            handleDayClickEvent(date);
        }
    });
});