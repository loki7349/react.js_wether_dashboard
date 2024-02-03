const API_KEY = "7b996ab0342ec520f78cdb7f6bbcc64b"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url).then((res) => res.json())
}
 
const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_main, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]
    return {lat, lon, temp, feels_like, temp_main, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, weather, speed}
}

const getFormatedWeatherData = async(searchParams) => {
    const formatedCurrentWeather = await getWeatherData('eather', searchParams).then(formatCurrentWeather)

    return formatedCurrentWeather
}

export default getFormatedWeatherData;