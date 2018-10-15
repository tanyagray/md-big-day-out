// JavaScript Document

function CheckEmail(){
	
	var vemail = document.getElementById('email').value;
	var validationresult = document.getElementById('valemail');
	var submitValidated = false;
	
	if((vemail.length < 6) ||
	   (vemail.indexOf('@',0) < 1) ||
	   (vemail.lastIndexOf('@') != vemail.indexOf('@',0)) ||
	   (vemail.lastIndexOf('@') > (vemail.length - 5)) ||
	   (vemail.lastIndexOf('.') > (vemail.length - 3)) ||
	   (vemail.lastIndexOf('.') < (vemail.length - 4)) ||
	   (vemail.indexOf('..',0) > -1) ||
	   (vemail.indexOf('@.',0) > -1) ||
	   (vemail.indexOf('.@',0) > -1) ||
	   (vemail.indexOf(',',0) > -1)) {
			validationresult.innerHTML = "<img src=\"images/cross.gif\" />";
			submitValidated = false;
	}else{
		validationresult.innerHTML = "<img src=\"images/tick.gif\" />";
		submitValidated = true;
	}
	
}

function CheckName(){
	
	var vname = document.getElementById('name').value;
	var validationresult = document.getElementById('valname');
	
	if(vname == ""){
		validationresult.innerHTML = "<img src=\"images/cross.gif\" />";
		submitValidated = false;		
	}else{
		validationresult.innerHTML = "<img src=\"images/tick.gif\" />";
		submitValidated = true;
	}
	
}

function ValidateAll(){
	CheckName();
	CheckEmail();
	
	if(submitValidated == true){
		return true;
	}else{
		return false;
	}
}