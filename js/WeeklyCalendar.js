$(document).ready(function() {
    $('#weekviewcalendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaWeek'
        },
        allDaySlot: false,
        defaultView: 'agendaWeek',
        defaultDate: '2015-02-12',
        editable: true,
        events: eventArr1,
        eventClick: function(info){
            alert("event clicked");
        },
        dayClick: function(date, jsEvent, view){
            if(document.getElementById("myForm").style.display != "block")
                openForm();

            var dateAndTimeArray = date.format().toString().split("T");
            var dateClicked = dateAndTimeArray[0];
            var timeClicked = dateAndTimeArray[1];

            $("input[name=scheduledate]").val(dateClicked);
            $("input[name=starttime]").val(timeClicked);
            $("input[name=helipadnumber]").val("testvalue4");
        },
    });
});
