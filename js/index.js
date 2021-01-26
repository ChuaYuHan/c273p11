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
    
    for (var i = 0; i < movieArray.length; i++) {
        var movie = movieArray[i];
        var title = "Title: " + movie.Title + "</br>";
        var plot = "Plot: " + movie.Plot + "</br></br>";
    }
    $("#title").html(title);
    $("#plot").html(plot);
    $("#image").html("<img src='" + movie.Poster + "'/>'");
    
    $("#btnSearch").click(function () {
        var movie = {};
        movie.title = $("#sTitle").val();
        movie.plot = $("#sPlot").val();
        
        movieArray[movieArray.length] = movie;
        localStorage.setItem("movieArray", JSON.stringify(movieArray));
    });
});
