function renderCalendarData(calendarType, data){
    clearCalendarData(calendarType);
    $(calendarType).fullCalendar('addEventSource', data);
}

function clearCalendarData(calendarType){
    $(calendarType).fullCalendar('removeEvents');
}