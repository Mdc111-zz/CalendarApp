var currentOpen = "#dayviewcalendar";

function toggleTab(elementId) {
    document.getElementById("myForm").style.display = "none";
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
  document.getElementById("dayview").style.display = "block";
  document.getElementById("weekview").style.display = "none";
  renderCalendarData(currentOpen, eventData);
}

function changeToWeekView(){
  let currentlySelectedHelipad = GetHelipadNumberFromDropDown() - 1;
  let dataToRender = currentlySelectedHelipad == 5 ? [] : filterArrayByHelipad(eventData, currentlySelectedHelipad);

  document.getElementById("weekview").style.display = "block";
  document.getElementById("dayview").style.display = "none";
  renderCalendarData(currentOpen, dataToRender);
}