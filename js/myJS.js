$(document).ready(function () {
    console.log("working");
});


$(function () {
    //function that handles clicked list item
    $('.list-group a').click(function (e) {
        e.preventDefault()

        //changes highlighted item
        $that = $(this);
        $that.parent().find('a').removeClass('active');
        $that.addClass('active');

        //change card title to text of clicked title
        //console.log($that.text());
        var title = $that.text();
        $(".card-title").text(title);


        switch (title) {
            case "Movie Theatre App":
                $(".card-text").text("This app will display movie theatres in the Seattle area along with restaurants" +
                    "within the vicinity.  It will display all of this on Google Maps");
                var a = document.createElement('a');
                var linkText = document.createTextNode("GitHub Repo");
                a.appendChild(linkText);
                a.title = "link to GitHub";
                a.href = "https://github.com/nickvenn/MovieTheatre.git";

                var b = document.createElement('a');
                var linkText = document.createTextNode("Live link");
                b.appendChild(linkText);
                b.title = "link to live version";
                b.href = "https://nickvenn.github.io/MovieTheatre/";
                $(".card-text").append("<br>");
                $(".card-text").append(a, "  |  ", b);

                var img = document.createElement("img");
                img.src = "./images/MovieTheatreSnip.PNG";
                $("#code-card").empty();
                $("#code-card").append(img);
                break;

            case "Baby Item Postings App":

                $(".card-text").text("This app will allow users to post and search for baby related items within the Seattle area." +
                    "Users can search by item or by zip code, and will populate the returned data on Google Maps");
                var a = document.createElement('a');
                var linkText = document.createTextNode("GitHub Repo");
                a.appendChild(linkText);
                a.title = "link to GitHub";
                a.href = "https://github.com/nickvenn/BabySearchItem.git";

                var b = document.createElement('a');
                var linkText = document.createTextNode("Deployed Link");
                b.appendChild(linkText);
                b.title = "link to deployed Version";
                b.href = "https://pacific-fortress-36377.herokuapp.com/";
                $(".card-text").append("<br>");
                $(".card-text").append(a, "  |  ", b);

                var img = document.createElement("img");
                img.src = "./images/BabySearchSnip.PNG";
                $("#code-card").empty();
                $("#code-card").append(img);
                break;

            case "Train Scheduler App":

                $(".card-text").text("This app allows users to create a train schedule and see a timetable of all created trains");
                var a = document.createElement('a');
                var linkText = document.createTextNode("GitHub Repo");
                a.appendChild(linkText);
                a.title = "link to GitHub";
                a.href = "https://github.com/nickvenn/TrainSchedule.gitt";

                var b = document.createElement('a');
                var linkText = document.createTextNode("Live Link");
                b.appendChild(linkText);
                b.title = "link to live version";
                b.href = "https://nickvenn.github.io/TrainSchedule/";
                $(".card-text").append("<br>");
                $(".card-text").append(a, "  |  ", b);

                var img = document.createElement("img");
                img.src = "./images/TrainScheduleSnip.PNG";
                $("#code-card").empty();
                $("#code-card").append(img);
                break;
            default:
                break;
        }
    });
});


