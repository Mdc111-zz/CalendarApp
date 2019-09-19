function toggleHelipadDropDown() {
    if(isHelipadDropDownOpen())
        closeHelipadDropDown();
    else
        openHelipadDropDown();
}

function isHelipadDropDownOpen(){
    return document.getElementById("myDropdown").style.display == "block";
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
  
    let dataToRender = currentlySelectedHelipad == 5 ? [] : filterArrayByHelipad(eventData, currentlySelectedHelipad);
    renderCalendarData(currentOpen, dataToRender);
}

function GetHelipadNumberFromDropDown(){
  let helipadText = document.getElementById("dropbtn").innerHTML;
  if(helipadText == "Select Helipad")
    return 5;
  
    
  let helipadNumberAsText = helipadText.substring(helipadText.indexOf(" ") + 1);
  return parseInt(helipadNumberAsText);
}