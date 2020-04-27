/*=============================LOGIN PAGE  STARTS =============*/

function  check(){
	
	var pass = document.getElementById("password") ; 
	var mail = document.getElementById("email") ; 
	if (mail.value == "")
	{
		
		alert("Please Enter Your Email Correctly  ");
		mail.focus();
		mail.style.border = "solid 3px red";
		return false;
	}
	
	if (pass.value == "")
	{
		
		alert("Please Enter Your Password ");
		pass.focus();
		pass.style.border = "solid 3px red";
		return false;
	}
}

/*=============================LOGIN PAGE  ENDS =============*/








/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< TYPE TESTING PAGE  STRATS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

var sec = 1;
id = 0;
var interval = 1000;
var texts = [
		"ok for opportunities in every change in your life.",
		"The light heart lives long.",
		"Life is a question and how we live it is our answer.",
		"Where there is love there is life"
		];
var num = Math.floor(Math.random()*texts.length);
	



/*========================================timer function starts========= */

function time()
{	
	
	id = window.setInterval(msg , interval);

}

	
	
function msg(){
	
	document.getElementById("timer").value = sec;   // inserting sec in input box
	sec++;
	 
	checkStr();
	

}



/*===================================================timer function ENDS ============================================ */



/* ===================================================random text starts  ====================== */

function refresh(){
	
	
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
    random();
	
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        random();
    }
}

function random(){
	
	
	

	var random = document.getElementById('given').value = texts[num];   // insertion of random text
	var	input1 = document.getElementsByTagName("p");
	var given =  input1[0].innerHTML = random; 
	
}

/* ===================================================random text ends  ====================== */


/* =================================================== check if two str are same or not starts  ====================== */
function checkStr(){

	
	var	input1 = document.getElementsByTagName("p");
	var	input2 = document.getElementById("input").value;
	

	
	var given =  input1[0].innerHTML = texts[num];        
	
	

	
	
	if (given == input2)
	{	
		
		total_time();	
		document.getElementById("ty").innerHTML = "THANK YOU FOR USING OUR SERVICE"
	}

	
}

/* =================================================== check if two str are same or not starts  ====================== */

function total_time(){
	
	var	input2 = document.getElementById("input").value;
	var total_length = input2.length;  // length of input
	
	
	
	var total_time = sec -1;
	var b = (total_length / total_time).toFixed(2);  // calculating wpm upto 2 decimals
	document.getElementById("wpm").value = b;   // WPM insertion
	window.clearInterval(id);
}


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TYPE TESTING PAGE  ENDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


