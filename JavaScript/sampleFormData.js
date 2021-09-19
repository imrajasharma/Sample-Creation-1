//  var arrayDataKey = [];


function setUserData(userJsonArrayObject, employee_id) {


    var emp_name = document.forms['myForm']['empName'].value;
    var emp_Gender = document.forms['myForm']['Gender'].value;
    var emp_Age = document.forms['myForm']['age'].value;
    var emp_Designation = document.forms['myForm']['designation'].value;
    var emp_Phone = document.forms['myForm']['phone'].value;
    var emp_Address = document.forms['myForm']['address'].value;
    var emp_Email = document.forms['myForm']['email'].value;
    var emp_Location = document.forms['myForm']['location'].value;
    var emp_Manager = document.forms['myForm']['manager'].value;


    //Data initialization end

    var userDataObject = {
        Employee_ID: employee_id,
        Employee_Name: emp_name,
        Gender: emp_Gender,
        Age: emp_Age,
        Phone: emp_Phone,
        Designation: emp_Designation,
        Address: emp_Address,
        Email: emp_Email,
        Location: emp_Location,
        Manager: emp_Manager
    };

    userJsonArrayObject.push(userDataObject);
    //Converting Json key to Array Objects

    var localStorageObjectKey = JSON.stringify(userJsonArrayObject);
    localStorage.setItem("arrayDataKey", localStorageObjectKey);

}

//Display Data
function displayUserData(indexdata, JsonObject) {
    if (indexdata == 0) {
        var jsonStoredObject = localStorage.getItem("arrayDataKey");
        var GetEmpData = JSON.parse(jsonStoredObject)
        alert("Hello " + GetEmpData[indexdata].Employee_Name + " your response has been submitted successfully \n "
            + "Your employee ID is : " + GetEmpData[indexdata].Employee_ID);
        // var arrayDataKey = localStorage.getItem("userJsonArray")
    } else {
        // var jsonStoredObject = localStorage.getItem("arrayDataKey");
        alert("Hello " + JsonObject[indexdata].Employee_Name + " your response has been submitted successfully \n "
            + "Your employee ID is : " + JsonObject[indexdata].Employee_ID);
        // var arrayDataKey = localStorage.getItem("userJsonArray")
    }

}

//Hiding Form Container Div
function hideFormContainer(){
    $(".header").hide();
    $(".formContainer").hide();
}

//displayUserDataHeader
function displayUserDataHeader(){
    let headData = '<div class="employeeDataHeader"> '
                    + ' Your Response has been submitted successfully!! '
                    + ' </div>'
                    + '   <div id="userData"> '
                    + ' </div>' ;   

                    

    $("body").append(headData);
}

//Making div Container for displaying user Data
function appendUserDataOnDiv(JsonObject) {
    for (let objectIndex = 0; objectIndex < JsonObject.length; objectIndex++) {

        //Creating Data
        var data =
            '<div class="userDataDivContainer"> ' + ' <pre>'
            + ' Employee ID    : ' + JsonObject[objectIndex].Employee_ID+ '<br>'
            + ' Employee Name  : ' + JsonObject[objectIndex].Employee_Name + '<br>'
            + ' Gender         : ' + JsonObject[objectIndex].Gender + '<br>'
            + ' Age            : ' + JsonObject[objectIndex].Age + '<br>'
            + ' Phone          : ' + JsonObject[objectIndex].Phone + '<br>'
            + ' Designation    : ' + JsonObject[objectIndex].Designation + '<br>'
            + ' Address        : ' + JsonObject[objectIndex].Address + '<br>'
            + ' Email          : ' + JsonObject[objectIndex].Email + '<br>'
            + ' Job Location   : ' + JsonObject[objectIndex].Location + '<br>'
            + ' Manager Name   : ' + JsonObject[objectIndex].Manager + '<br>'
            + '</pre> '
            + '  </div>';

        // Appending Data

        $("#userData").prepend(data);

    }
}


// Displaying data on Grid
function displayUserDataOnGrid(indexdata, JsonObject) {
    if (indexdata == 0) {
        var jsonStoredObject = localStorage.getItem("arrayDataKey");
        var GetEmpData = JSON.parse(jsonStoredObject)

        appendUserDataOnDiv(GetEmpData);
    }
    else {
        appendUserDataOnDiv(JsonObject);
    }
}



function checkLocalStorage() {
    // var arrayDataKey = localStorage.getItem("arrayDataKey");


    // Check Data is null of not
    var arrayDataKey = localStorage.getItem("arrayDataKey");

    if (arrayDataKey == null) {
        console.log(null);
        var employee_id = 1;
        var arrayDataKey = [];

        setUserData(arrayDataKey, employee_id);

        displayUserData(0);
        hideFormContainer();
        displayUserDataHeader();
        displayUserDataOnGrid(0);
    }
    else {
        var userJsonArrayObject = JSON.parse(arrayDataKey);

        console.log(newEmployeeId);

        function checkExistingUser() {
            for (let index = 0; index < userJsonArrayObject.length; index++) {
                if (userJsonArrayObject[index].Employee_Name == document.forms['myForm']['empName'].value) {
                    alert("Name is already taken!!");
                    return false;
                }
                else if (userJsonArrayObject[index].Email == document.forms['myForm']['email'].value) {
                    alert("Email is already taken!!");
                    return false;
                }
            }
        }
        if (checkExistingUser() == false) {
            return;
        }
        else {
            var newEmployeeId = userJsonArrayObject.length + 1;
            setUserData(userJsonArrayObject, newEmployeeId);

            // For showing alert for Successfully filled the form
            displayUserData(userJsonArrayObject.length - 1, userJsonArrayObject); 

            //For Hiding form div after successfully submiting form
            hideFormContainer();

            //Displaying Header for User Data
            displayUserDataHeader();

            //For dispalying User Data
            displayUserDataOnGrid(0, userJsonArrayObject)
        }
    }
}



//Ending