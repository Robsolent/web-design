function main() {
	
	startTime();
}


function startTime() 

{
	
    var today = new Date();
   
	var d = today.getDate();
	
	var month = today.getMonth();
	
	var y = today.getFullYear();
	
	var h = today.getHours();
   
	var m = today.getMinutes();
   
	var month = (month *1) +1
	var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
	
	document.getElementById('date').innerHTML =
	d + "/"+ month +"/" + y;
	
   
	document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}
