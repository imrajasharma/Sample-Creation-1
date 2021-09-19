function populate(){
    
    // Sample Data for drop down menu
    var location = [
        {"Id":"1","city":"Dehradun"},
        {"Id":"2","city":"Noida"},
        {"Id":"3","city":"Delhi"},
        {"Id":"4","city":"Banglore"}
                    ] ;
                
    var lengthLocation = location.length; 
    console.log(lengthLocation);
    var dropDownid= document.getElementById("dropDownMenuBox");
    for(var i=0;i<location.length;i++)
    {
        dropDownid.innerHTML = dropDownid.innerHTML +   '<option value="' 
                                                    + location[i]['city']
                                                    +'">'
                                                    + location[i]['city'] 
                                                    + '</option>';
    }
    
}

$(document).ready(()=>{
    populate();
})
    