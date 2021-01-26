/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    $("#btnSearch").click(function () {
        // Make sure that the contents and poster is empty
        $("#contents").empty();
        $("#poster").empty();

        // Save user entered data in variable
        var title = $("#sTitle").val();
        var year = $("#sYear").val();
        var plot = $("#sPlot").val();

        // Ajax to display the information about the movie
        $.ajax({
            url: "http://www.omdbapi.com/",
            type: "GET",
            data: "t=" + title + "&y=" + year + "&plot=" + plot + "&apikey=19c0fc0b",
            dataType: "jsonp",
            // Upon successful response
            success: function (response) {
                var message = "";
                message += "Title: " + response.Title + "</br>";
                message += "Released: " + response.Released + "</br>";
                message += "Run Time: " + response.Runtime + "</br>";
                message += "Genre: " + response.Genre + "</br>";
                message += "Actors: " + response.Actors + "</br>";
                message += "Plot: " + response.Plot + "</br>";

                // Display the data in the contents <div>
                $("#contents").html(message);
                // Display poster image in the poster <div>
                $("#poster").html("<img src='" + response.Poster + "'/>'");

                var review = JSON.parse(localStorage.getItem("review"));
                if (review == null) {
                    review = [];
                }

                review[review.length] = response;
                localStorage.setItem("review", JSON.stringify(review));

            },
        });
    });


//    var movie = {};
//    movie.title = $("#sTitle").val();
//    movie.year = $("#sYear").val();
//    movie.plot = $("#sPlot").val();


//    var movie = JSON.parse(localStorage.getItem("movie"));
//    if (movie != null) {
//        var message = "";
//        message += "Title: " + movie.Title + "</br>";
//        message += "Released: " + movie.Realeased + "</br>";
//        message += "Run Time: " + movie.Runtime + "</br>";
//        message += "Genre: " + movie.Genre + "</br>";
//        message += "Actors: " + movie.Actors + "</br>";
//        message += "Plot: " + movie.Plot + "</br>";
//        var image = movie.Poster;
//        $(".contents").html(message);
//        $(".poster").html(image);
//    }


});
