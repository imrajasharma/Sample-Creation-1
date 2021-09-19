 //New code for making object and getting values from



 
//Ending



 //Submit Data Function
 
 function submitData(){
 
    var emp_id = document.forms['myForm']['empId'].value;
    console.log(emp_id);
  //  localStorage.setItem("Employement_ID",emp_id);


    var emp_name = document.forms['myForm']['empName'].value;
    console.log(emp_name);
   // localStorage.setItem("Employee_Name" , emp_name);

    // var emp_Gender =  $("input[type='radio'][name='Gender']:checked").val() ;
    var emp_Gender = document.forms['myForm']['Gender'].value;
    console.log(emp_Gender);
 
   // localStorage.setItem("Gender",emp_Gender);

    var emp_Age = document.forms['myForm']['age'].value;
    console.log(emp_Age);
   // localStorage.setItem("Age",emp_Age);

    var emp_Designation = document.forms['myForm']['designation'].value;
    console.log(emp_Designation);
 //   localStorage.setItem("Designation",emp_Designation);

    var emp_Phone = document.forms['myForm']['phone'].value;
    console.log(emp_Phone);
  //  localStorage.setItem("Phone_Number",emp_Phone);

    var emp_Address = document.forms['myForm']['address'].value;
    console.log(emp_Address);
  //  localStorage.setItem("Address",emp_Address );

    var emp_Email = document.forms['myForm']['email'].value;
    console.log(emp_Email);
   // localStorage.setItem("Email", emp_Email);

    var emp_Location = document.forms['myForm']['location'].value;
    console.log(emp_Location);
  //  localStorage.setItem("Location",emp_Location);
    
    var emp_Manager = document.forms['myForm']['manager'].value;
    console.log(emp_Manager);
 //   localStorage.setItem("Manager_Name", emp_Manager);




    var userFormData = {
        Employee_ID:emp_id,
        Employee_Name:emp_name,
        Gender:emp_Gender,
        Age:emp_Age,
        Designation:emp_Designation,
        Address:emp_Address,
        Email:emp_Email,
        Location:emp_Location,
        Manager:emp_Manager
    };

    var myJson = JSON.stringify(userFormData);
    localStorage.setItem("DataObject",myJson);
    console.log(myJson);



    //Getting Values from local storage for testing

    var jsonStoredObject =  localStorage.getItem("DataObject");
    var JsonObject = JSON.parse(jsonStoredObject);
    alert("Hello "+ JsonObject.Employee_Name +" your response has been submitted successfully ");
    // localStorage.setItem("sampleName",JsonObject.Employee_Name);
 //   document.getElementById("").innerHTML = JsonObject.Employee_Name;
}















