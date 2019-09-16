function clearForm(){
    $("input[name=title]").val("");
    $("input[name=scheduledate]").val("");
    $("input[name=starttime]").val("");
    $("input[name=endtime]").val("");
    $("input[name=helipadnumber]").val("");
    $("input[name=description]").val("");
}

function generateEventId(){
    return Math.floor(Math.random() * Math.floor(1000000));
}