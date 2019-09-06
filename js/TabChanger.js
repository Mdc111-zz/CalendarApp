function openPage(elementId) {
    document.getElementById("myForm").style.display = "none";
    
    if(elementId == "dayview"){
      document.getElementById(elementId).style.display = "block";
      document.getElementById("weekview").style.display = "none";
    }else{
      document.getElementById(elementId).style.display = "block";
      document.getElementById("dayview").style.display = "none";
    }
}
