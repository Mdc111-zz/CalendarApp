$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today, addEventButton',
            center: 'title',
            right: 'multiColAgendaDay,multiColAgendaWeek'
        },
        views: {
            multiColAgendaDay: {
                type: 'multiColAgenda',
                duration: { days: 1 },
                numColumns: 4,
                columnHeaders: ['Helipad One', 'Helipad Two', 'Helipad Three', 'Helipad Four']
            },
            multiColAgendaWeek: {
                type: 'multiColAgenda',
                duration: { weeks: 1 },
                numColumns: 1,
            }
        },
        allDaySlot: false,
        defaultView: 'multiColAgendaDay',
        defaultDate: '2015-02-12',
        editable: true,
        events: [
            {
                title: 'Meeting 1',
                start: '2015-02-12T10:30:00',
                end: '2015-02-12T12:30:00',
                column: 0,
                description: "description 1"
            },
            {
                title: 'Meeting 2',
                start: '2015-02-12T10:30:00',
                end: '2015-02-12T12:30:00',
                column: 1,
                description: "description 2"
            }
        ],
        eventClick: function(callEvent, jsEvent, view){
            alert("event clicked");
            
        },
        dayClick: function(callEvent, jsEvent, view){
            alert("time clicked");
        },
    });
});

function toggleForm() {
    if(document.getElementById("myForm").style.display == "block")
        closeForm();
    else
        openForm();
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function handleDynamicSchedule(){
    var startDate = prompt('Enter a date in YYYY-MM-DD format');
    var endDate = prompt('Enter a date in YYYY-MM-DD format');
    var dateStr = prompt('Enter a date in YYYY-MM-DD format');
    var date = moment(dateStr);

    //if (date.isValid()) {
        $('#calendar').fullCalendar('renderEvent', {
            title: 'Meeting 2',
            start: '2015-02-12T10:30:00',
            end: '2015-02-12T12:30:00',
            column: 3,
            description: "description 2"
        });
        alert('Great. Now, update your database...');
    //} else {
    //    alert('Invalid date.');
    //}
}