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

function toggleForm() {
    //$("#dayviewcalendar").fullCalendar('removeEvents');
    //$("#dayviewcalendar").fullCalendar('addEventSource', eventArr2);
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
    var title = $("input[name=title]").val();
    var dateOfSchedule = $("input[name=scheduledate]").val();
    var startTime = $("input[name=starttime]").val();
    var endTime = $("input[name=endtime]").val();
    var helipadNumber = $("input[name=helipadnumber]").val();
    var description = $("input[name=description]").val();

    var date = moment(dateOfSchedule);

    //if (date.isValid()) {
        $('#dayviewcalendar').fullCalendar('renderEvent', {
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

//$(window).click(function(event) {
//    if (!event.target.matches('.dropbtn')) {
//        document.getElementsByClassName(".dropbtn").style.display = "none";
//    }
//});

function showHelipadDropdown(){
    document.getElementById("myDropdown").style.display = "block";
}

function toggleDisplay() {
    if(document.getElementById("myDropdown").style.display == "block")
      document.getElementById("myDropdown").style.display = "none";
    else
      document.getElementById("myDropdown").style.display = "block";
}
  
function updateCurrentHelipadText(currentlySelectedItem){
    document.getElementById("testid").innerHTML = currentlySelectedItem;
}



var eventArr1 = [
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
];

var eventArr2 = [
    {
        title: 'Meeting 2',
        start: '2015-02-11T10:30:00',
        end: '2015-02-11T12:30:00',
        column: 1,
        description: "description 2"
    }
];