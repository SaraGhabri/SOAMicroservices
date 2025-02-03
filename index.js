const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&lang=fr&q=`;

async function getWeatherData(city) {
    try {
        const response = await fetch(BASE_URL + city);
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        console.log("description:", data.weather[0].description);
        console.log("Température:", data.main.temp);
        console.log("Humidité:", data.main.humidity);
    } catch (error) {
        console.error("Erreur lors de la récupération des données météo :", error);
    }
}

getWeatherData("Sousse");
