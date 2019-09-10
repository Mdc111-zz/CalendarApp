var currentOpen = "dayview";

function toggleTab(elementId) {
    document.getElementById("myForm").style.display = "none";
    if(elementId === currentOpen){
      return;
    }

    if(elementId == "dayview"){
      changeToDayView(elementId);
    }else{
      changeToWeekView(elementId);
    }
}

function changeToDayView(elementId){
  currentOpen = "dayview";
  $("#dayviewcalendar").fullCalendar('removeEvents');
  $("#dayviewcalendar").fullCalendar('addEventSource', dayEventData);
  document.getElementById(elementId).style.display = "block";
  document.getElementById("weekview").style.display = "none";
}

function changeToWeekView(elementId){
  currentOpen = "weekview"
  var currentlySelectedHelipad = document.getElementById("dropbtn").innerHTML;

  if(currentlySelectedHelipad == "Select Helipad"){
    $("#weekviewcalendar").fullCalendar('removeEvents');
    $("#weekviewcalendar").fullCalendar('addEventSource', []);
  }
  else if(currentlySelectedHelipad == "Helipad 1"){
    $("#weekviewcalendar").fullCalendar('removeEvents');
    $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad1);
  }
  else if(currentlySelectedHelipad == "Helipad 2"){
    $("#weekviewcalendar").fullCalendar('removeEvents');
    $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad2);
  }
  else if(currentlySelectedHelipad == "Helipad 3"){
    $("#weekviewcalendar").fullCalendar('removeEvents');
    $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad3);
  }
  else if(currentlySelectedHelipad == "Helipad 4"){
    $("#weekviewcalendar").fullCalendar('removeEvents');
    $("#weekviewcalendar").fullCalendar('addEventSource', weekEventDataHelipad4);
  }

  document.getElementById(elementId).style.display = "block";
  document.getElementById("dayview").style.display = "none";
}