//Number Validation

function checkNumberValidation(input){
    var numberRegEx = /[^0-9]/g;
    input.value = input.value.replace(numberRegEx,"");
}

//Email Validation
function validateEmail(){
    var userEnteredEmail = $("#emailValue").val();
   var emailRegEx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if(emailRegEx.test(userEnteredEmail)){
        return true;
    }
    else{
        return false;
    }
}

$(document).ready(()=>{
    $("#emailValue").keyup(()=>{
        if(validateEmail()){
            $("#emailValidationText").hide();
            $("#emailValue").css("border","none");
            $("#emailValue").css("box-shadow","none");
            $("#emailValidationText").html("<p>Valid email</p>");
        }
        else{
            $("#emailValidationText").show();
            $("#emailValidationText").css("color","red");
            $("#emailValidationText").css("margin","5px");
           // $("#emailValue").css("border"," 1px solid red");
            $("#emailValue").css("box-shadow"," 0px 0px 15px 3px #ff6060f1");
            $("#emailValidationText").html("<p>Invalid email</p>");
        }
    });
});

// Age Validation

function validateAge(){
    var userAgeData = $("#ageId").val();
    if( userAgeData <61 && userAgeData>17){
        return true;
    }
    else{
        return false;
    }

}

$(document).ready(()=>{
    $("#ageId").keyup(()=>{
        if(validateAge()){
            $("#ageId").css("border","none");
            $("#ageValidationText").hide();
            $("#ageId").css("box-shadow","none");
            
            $("#ageValidationText").html("<p> Valid </p>");
        }
        else{
            $("#ageValidationText").show();
            //$("#ageId").css("border","1px solid red");
            $("#ageValidationText").css("color","red");
            $("#ageValidationText").css("margin","5px");
            $("#ageId").css("box-shadow"," 0px 0px 15px 3px #ff6060f1");
            $("#ageValidationText").html("<p>Please Enter age between 18-60 </p>");
        }
    });
});

//Phone Validation

function validatePhone(){
    var userPhoneData = $("#phoneId").val();
    if( userPhoneData.length ==10 ){
        return true;
    }
    else{
        return false;
    }

}

$(document).ready(()=>{
    $("#phoneId").keyup(()=>{
        if(validatePhone()){
            $("#phoneId").css("border","none");
            $("#phoneValidationText").hide();
            $("#phoneId").css("box-shadow"," none");
            $("#phoneValidationText").html("<p> Valid </p>");
        }
        else{
            $("#phoneValidationText").show();
           // $("#phoneId").css("border","1px solid red");
            $("#phoneValidationText").css("color","red");
            $("#phoneValidationText").css("margin","5px");
            $("#phoneId").css("box-shadow"," 0px 0px 15px 3px #ff6060f1");
            $("#phoneValidationText").html("<p> Invalid Phone Number </p>");
        }
    });
});



//  Validating Form
 function validateForm(){
    if(validateEmail() && validateAge() && validatePhone() ){
        checkLocalStorage();
     //submitData();
    }
    else{
      alert("Please fill the form correctly!!")
      return false;
    }
    
}


