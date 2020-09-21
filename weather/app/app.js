var apiKey = "e11627c7654a48769d4170817201909";
var baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;
var sportsURL = `https://api.weatherapi.com/v1/sports.json?key=${apiKey}&q=`;
var daysURL = `&days=`;
var daycount = 1;

function getData(fullURL) {
    $.get(fullURL, function(data){
        console.log(data);
        
        parseForecast(data.forecast.forecastday);

        let currentIcon = data.current.condition.icon;
       

        $(".location-content").append(
            `
            
            <p>City: ${data.location.name}</p>
            <p>State: ${data.location.region}</p>
            <p>Country: ${data.location.country}</p>
            <p>Local Time: ${data.location.localtime}</p>
            <p>Latitude: ${data.location.lat} degrees</p>
            <p>Longitude: ${data.location.lon} degrees</p>
            <p>Timezone: ${data.location.tz_id}</p>
            
          `
            
        )
        $(".city").append(
            `
            <p>${data.location.name}</p>
            `
        )
        $(".current-content").append( 

            `
            <img src="${currentIcon}" style="height: 150px; width: 150px; margin-left: 50px;"></img>
            <h3 style="margin-top: -30px;">${data.current.condition.text}</h3>
            <br>
            <p>Last Update: ${data.current.last_updated}</p>
            <p>Temperature: ${data.current.temp_c} C / ${data.current.temp_f} F</p>
            <p>Wind: ${data.current.wind_mph} mph / ${data.current.wind_kph} kph</p> 
            <p>Wind Degree: ${data.current.wind_degree} degrees</p>
            <p>Wind Direction: ${data.current.wind_dir}</p>
            <p>Pressure: ${data.current.pressure_mb} mb / ${data.current.pressure_in} inches</p>
            <p>Precipitation: ${data.current.precip_mm} mm / ${data.current.precip_in} inches</p>
            <p>Humidity: ${data.current.humidity}</p>
            <p>Cloud Cover: ${data.current.cloud}%</p> 
            <p>Feels Like: ${data.current.feelslike_c} C / ${data.current.feelslike_f} F</p>
            <p>Visibility: ${data.current.vis_km} km / ${data.current.vis_miles} miles</p>
            <p>UV Index: ${data.current.uv}</p>
            <p>Wind Gust: ${data.current.gust_mph} mph / ${data.current.gust_kph} kph</p>
            
            
            `
        )
        
        
    }).catch(function (error) {
        console.log(error);
        console.log("Invalid Zipcode")
    });

}

function getSports(fullSportsURL) {
    $.get(fullSportsURL, function(data){
        console.log(data)

        parseSports(data.football)
    })
}

function parseSports(sportsArray) {
    $.each(sportsArray,function(idx, value) {
        console.log(value)

        $(".event-sports").append(
            `
            <h2> ${value.country}</h2>
            <p>Stadium ${value.stadium}</p> 
            <p>Tournament ${value.tournament}</p>
            <p>Date ${value.start}</p>
            <p>Match: ${value.match}</p>
            <br>
            <div style="height: 2px; widtch: 100%; background-color: grey;"></div>
            <br>
            `
        )
    })
}

function parseForecast(forecastArray) {

    $(".forecastTitle").append(
        `
        <h1>Forecast</h1>
        `
    )
    $.each(forecastArray,function(idx, value) {
        console.log(value)

        let forecastIcon = value.day.condition.icon;

        
            $(".forecast-content").append(
                `
                
                <h3>${daycount} Day(s) from now</h3>
                <img src="${forecastIcon}"></img>
                <p>Condition: ${value.day.condition.text}</p>
                
                <p>Date: ${value.date}</p>
                <p>Max Temperature: ${value.day.maxtemp_c} C / ${value.day.maxtemp_f} F</p>
                <p>Min Temperature: ${value.day.mintemp_c} C / ${value.day.mintemp_f} F</p>
                <p>Average Temperature: ${value.day.avgtemp_c} C / ${value.day.avgtemp_f} F</p>
                <p>Max Wind Speed: ${value.day.maxwind_mph} mph / ${value.day.maxwind_kph} kph</p>
                <p>Total Precipitation: ${value.day.totalprecip_mm} mm / ${value.day.totalprecip_in} inches</p>
                <p>Average Visibility: ${value.day.avgvis_km} km / ${value.day.avgvis_miles} miles</p>
                <p>Average Humidity: ${value.day.avghumidity}</p>
                <p>Chance of Rain: ${value.day.daily_chance_of_rain}%</p>
                <p>Chance of Snow: ${value.day.daily_chance_of_snow}%</p>
                <p>Sunrise: ${value.astro.sunrise}</p>
                <p>Sunset: ${value.astro.sunset}</p>
                <p>Moonrise: ${value.astro.moonrise}</p>
                <p>Moonset: ${value.astro.moonset}</p>
                <br></br>
                <div style="height: 2px; width: 100%; background-color: grey;"></div>
                <br></br>

                `
                
            )

            daycount++;

    });

}



function initListener() {

     $(".location-content").css("display", "none")
     $(".current-content").css("display", "none")
     $(".forecast-content").css("display", "none")
     $(".forecast-content").css("display", "none")
     

    $("#getWeather").click(function () {
        
        $(".inputBox").css("height", "100%")
        $(".location-content").css("display", "block")
        $(".current-content").css("display", "block")
        $(".forecast-content").css("display", "block")

        var zip = $("#zipcode").val();
        console.log(zip);
        var fullURL = baseURL + zip + daysURL + $("#days").val();
        
        console.log(fullURL);
        getData(fullURL);
        
       
    })

    $("#getEvent").click(function () {
        var eventzip = $("#eventzip").val();
        console.log(eventzip);
        var fullSportsURL = sportsURL + eventzip
        $(".event-content").css("height", "100%")
        getSports(fullSportsURL);
    })

    $("#home").click(function () {
        $("body").css("background-image", "block")
    })
    $("#about").click(function () {
        $("body").css("background-image", "none")
    })
}






$(document).ready(function () {
    initListener();
})