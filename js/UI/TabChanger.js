var currentOpen = "#dayviewcalendar";

function toggleTab(elementId) {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm2").style.display = "none";
    if(elementId === currentOpen){
      return;
    }
    currentOpen = elementId;
    if(elementId == "#dayviewcalendar"){
      changeToDayView();
    }else{
      changeToWeekView();
    }
}

function changeToDayView(){
  renderCalendarData(currentOpen, eventData);
  document.getElementById("dayview").style.display = "block";
  document.getElementById("weekview").style.display = "none";
}

function changeToWeekView(){
  let currentlySelectedHelipad = GetHelipadNumberFromDropDown() - 1;

  let dataToRender = currentlySelectedHelipad == 5 ? [] : filterArrayByHelipad(eventData, currentlySelectedHelipad);
  renderCalendarData(currentOpen, dataToRender);

  document.getElementById("weekview").style.display = "block";
  document.getElementById("dayview").style.display = "none";
}