/*
==========================================
Project : Weather App

Description

Displays current weather
using Open-Meteo API.

Features

• Search City
• Temperature
• Wind Speed

Concepts Used

• Fetch API
• Async/Await
• DOM Manipulation

==========================================
*/

const button = document.getElementById("search");

button.addEventListener("click", async function () {

    const city = document.getElementById("city").value;

    if (!city) {

        alert("Enter a city name.");

        return;
    }

    try {

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results) {

            document.getElementById("weather").innerHTML =
                "<p>City not found.</p>";

            return;
        }

        const latitude = geoData.results[0].latitude;
        const longitude = geoData.results[0].longitude;

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
        );

        const weatherData = await weatherResponse.json();

        document.getElementById("weather").innerHTML = `
            <h3>${geoData.results[0].name}</h3>
            <p>Temperature : ${weatherData.current.temperature_2m} °C</p>
            <p>Wind Speed : ${weatherData.current.wind_speed_10m} km/h</p>
        `;

    } catch {

        document.getElementById("weather").innerHTML =
            "<p>Unable to fetch weather data.</p>";
    }
});