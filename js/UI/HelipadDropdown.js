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
    let currentlySelectedHelipad = GetHelipadNumberFromDropDown() - 1;

    if(currentlySelectedHelipad == "Select Helipad"){
      $("#weekviewcalendar").fullCalendar('removeEvents');
      $("#weekviewcalendar").fullCalendar('addEventSource', []);
    }
    else{
      $("#weekviewcalendar").fullCalendar('removeEvents');
      $("#weekviewcalendar").fullCalendar('addEventSource', filterArrayByHelipad(eventData, currentlySelectedHelipad));
    }
}

function GetHelipadNumberFromDropDown(){
  let helipadText = document.getElementById("dropbtn").innerHTML;
  let helipadNumberAsText = helipadText.substring(helipadText.indexOf(" ") + 1);
  return parseInt(helipadNumberAsText);
}