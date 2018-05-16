/*
 * Package Notification Website
 * Designed & Developed by Morse
 *
 *Filename: script.js
*/


// global variable


function boxNum(el) {
	alert("You selected " + (el.id) + (" is this correct?"));
}

function formVal() {
	var firstName = document.getElementById("first").value;
	var lastName = document.getElementById("last").value;
	var cellNum = document.getElementById("cell").value;
	var email = document.getElementById("email").value;
	var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var apartmentNumber = document.getElementById("apNumber").value;

	if (firstName === '' || lastName === '') {
		alert("Please fill all fields...!!!");
		return false;
	} else if(!(email).match(emailReg)){
		alert("Invalid Email...!!!");
		return false;
	} else {
		return true;
	}
}

function phoneNumber(){
	var cellNum = document.getElementById("cell").value;
  	var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  		if(cellNum.value.match(phoneNum)) {
  			alert("This is correct");
      		return true;
        } 
        else {
        	alert("Please use correct format!");
        return false;
        }
	}