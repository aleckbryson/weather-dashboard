$("button").on("click", function() {
    var city = $(this).attr("data-search");
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8ad66be05c21a1c3967cb90ab1da0b89";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
    .then(function(response) {
          // Storing an array of results in the results variable
    console.log(response)
    var results = response.data;
    