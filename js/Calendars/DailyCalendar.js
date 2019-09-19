$(document).ready(function() {
    document.getElementById("weekview").style.display = "none";
    window['moment-range'].extendMoment(moment);
    
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
        events: eventData,
        eventResize: function(event, delta, revertFunc, jsEvent, ui, view){
            let indexOfEventInArray = eventData.findIndex(x => x.id == event.id);
            let updatedEventEnd = calculateAdjustedTime(eventData[indexOfEventInArray].end, delta._data.days, delta._data.hours, delta._data.minutes)
            let eventsByHelipad = filterArrayByHelipad(eventData, eventData[indexOfEventInArray].column);

            if(DoTimesOverlap(event.id, eventData[indexOfEventInArray].start, updatedEventEnd, eventsByHelipad)){
                alert("Events cannot overlap");
                revertFunc();
                return;
            }

            if(confirm("Are you sure you want to resize this event ?")){
                handleResizeEvent(event.id, delta._data.hours, delta._data.minutes);
            }else{
                revertFunc();
            }
        },
        eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
            let indexOfEventInArray = eventData.findIndex(x => x.id == event.id);
            let updatedEventStart = calculateAdjustedTime(eventData[indexOfEventInArray].start, delta._data.days, delta._data.hours, delta._data.minutes)
            let updatedEventEnd = calculateAdjustedTime(eventData[indexOfEventInArray].end, delta._data.days, delta._data.hours, delta._data.minutes)
            let eventsByHelipad = filterArrayByHelipad(eventData, (event.column));

            if(DoTimesOverlap(event.id, updatedEventStart, updatedEventEnd, eventsByHelipad)){
                alert("Events cannot overlap");
                revertFunc();
                return;
            }

            if(confirm("Are you sure you want to move this event ?")){
                handleDroppedEvent(event.id, delta._data.days, delta._data.hours, delta._data.minutes, (event.column));
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