function renderCalendarData(calendarType, data){
    $(calendarType).fullCalendar('removeEvents');
    $(calendarType).fullCalendar('addEventSource', data);
}