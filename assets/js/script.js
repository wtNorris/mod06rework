var APIkey = '5133ceb0f2a1d71c6003e2c39af6728c';
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('MMMM Do YYYY, h:mm a');
let lat;
let lon;

// buttons
var $searchBtn = $('#searchBtn');
var fivedayForeC = $('.fivedayForeC');
var searchCity = $('#searchCity');

moment(); // calls date

// search button calls for city + api converts to lat/lon
$searchBtn.on("click", function (event) {
    event.preventDefault();
    console.log($(this));
    var city = $searchCity.val().trim();
    var queryURLTwo = "http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=5133ceb0f2a1d71c6003e2c39af6728c";

    $.ajax({
        url: queryURLTwo,
        method: "GET",
    }).then(function (response) {
        console.log(response);
    });
});

