function mainVal() {
    
    var logInForm = document.getElementById("formVal");  
      logInForm.user.addEventListener("blur", validateName); 
      logInForm.surname.addEventListener("blur", validateSName);
	  
	  var form = document.getElementById('formVal'); 
    
    form.addEventListener('submit', validateForm); 
}

function validateForm(event) {

   if(validateName() == false || validateSName() == false ) {
       
      event.preventDefault(); 
   }

    event.preventDefault();


}

function  validateRequired(element) {  

     if(element.value == "") {
        element.style.backgroundColor = "gainsboro"; 
        return false; 
     } else {
        element.style.backgroundColor = "palegreen"; 
        return true; 
     }
}

function validateName(event) {  
     var logInForm = document.getElementById("formVal");
     return validateRequired(logInForm.user); 
}

function validateSName(event) { 
     var logInForm = document.getElementById("formVal"); 
return validateRequired(logInForm.surname); }


function validateForm(event) { 
    
        event.preventDefault();  
        var form = document.getElementById('formVal'); 
      
        if(form.user.value== ""){  
            document.getElementById('name').style.display="block"
            event.preventDefault();  
        }
    
        else {
            document.getElementById('name').style.display="none"; 
        }
    
     if(form.surname.value== ""){ 
            document.getElementById('surname').style.display="block"
            event.preventDefault();
        }
    
        else {
            document.getElementById('surname').style.display="none";
        }
    
    }
	
