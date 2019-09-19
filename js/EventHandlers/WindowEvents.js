$(window).click(function(event) {
    if (wasDropDownClicked(event)) {
        document.getElementById("myDropdown").style.display = "none";
    }
});

function wasDropDownClicked(event){
    return (!event.target.matches('.myDropdown') && !event.target.matches('.dropbtn'));
}