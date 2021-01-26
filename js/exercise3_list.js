/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var personArray = JSON.parse(localStorage.getItem("personArray"));
    // check if array is empty
    if (personArray == null) {
        // create new array
        personArray = [];
    }

//    if (person != null) {
//        var message = "";
//        message += "Name: " + person.name + "</br>";
//        message += "Email: " + person.email + "</br>";
//        message += "Postal Code: " + person.postalCode + "</br></br>";
//        $("#results").html(message);
//    }
    
    var message = "";
    for (var i = 0; i < personArray.length; i++) {
        var person = personArray[i];
        message += "Name: " + person.name + "</br>";
        message += "Email: " + person.email + "</br>";
        message += "Postal Code: " + person.postalCode + "</br></br>";
    }
    $("#results").html(message);
    
    $("#btnSubmit").click(function () {
        var person = {};
        person.name = $("[name=name]").val();
        person.email = $("[name=email]").val();
        person.postalCode = $("[name=postalCode]").val();
        // set the length
        personArray[personArray.length] = person;
        localStorage.setItem("personArray", JSON.stringify(personArray));
    });
});


