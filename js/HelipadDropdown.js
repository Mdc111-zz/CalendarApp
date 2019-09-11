function toggleHelipadDropDown() {
    if(isHelipadDropDownOpen())
        closeHelipadDropDown();
    else
        openHelipadDropDown();
}

function isHelipadDropDownOpen(){
    return document.getElementById("myDropdown").style.display == "block"
}

function openHelipadDropDown(){
    document.getElementById("myDropdown").style.display = "block";
}

function closeHelipadDropDown(){
    document.getElementById("myDropdown").style.display = "none";
}

function updateSelectedHelipad(helipadNumber){
    document.getElementById("dropbtn").innerHTML = helipadNumber;
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
}