var currentOpen = "dayview";

function toggleTab(elementId) {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm2").style.display = "none";
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
  $("#dayviewcalendar").fullCalendar('addEventSource', eventData);
  document.getElementById(elementId).style.display = "block";
  document.getElementById("weekview").style.display = "none";
}

function changeToWeekView(elementId){
  currentOpen = "weekview"
  let currentlySelectedHelipad = GetHelipadNumberFromDropDown() - 1;

  if(currentlySelectedHelipad == "Select Helipad"){
    $("#weekviewcalendar").fullCalendar('removeEvents');
    $("#weekviewcalendar").fullCalendar('addEventSource', []);
  }
  else{
    $("#weekviewcalendar").fullCalendar('removeEvents');
    $("#weekviewcalendar").fullCalendar('addEventSource', filterArrayByHelipad(eventData, currentlySelectedHelipad));
  }
  document.getElementById(elementId).style.display = "block";
  document.getElementById("dayview").style.display = "none";
}