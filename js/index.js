/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {    
    var movieArray = JSON.parse(localStorage.getItem("review"));
    if (movieArray == null) {
        movieArray = [];
    }
    
    var message = "";
    for (var i = 0; i < movieArray.length; i++) {
        var movie = movieArray[i];
        message += "<div class='card'><div class='card-header'>" + movie.Title + "</div>";
        message += "<div class='card-body'>" + movie.Plot + "</div></div></br>";
    }
    $("#contents").append(message);
    
    $("#btnSearch").click(function () {
        var movie = {};
        movie.title = $("#sTitle").val();
        movie.plot = $("#sPlot").val();
        
        movieArray[movieArray.length] = movie;
        localStorage.setItem("movieArray", JSON.stringify(movieArray));
    });
});
