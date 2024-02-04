import { DateTime } from "luxon"

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

const formatForecastWeather = (data) => {
    if (!data || !data.daily || !data.hourly) {
        return null; // or throw an error, log a message, etc.
    }
    let { timezone, daily, hourly} = data;
    daily = data.daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly= data.hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    return {timezone, daily, hourly}
}

const getFormatedWeatherData = async(searchParams) => {
    const formatedCurrentWeather = await getWeatherData(
        'weather', 
        searchParams
    ).then(formatCurrentWeather);

    const {lat, lon} = formatedCurrentWeather

    const formatedForecastWeather = await getWeatherData('onecall', {
        lat,
        lon,
        exclude: 'current,minutely,alerts', 
        units: searchParams.units,
    }).then(formatForecastWeather)

    return {...formatedCurrentWeather, ...formatedForecastWeather}
}

const formatToLocalTime = (
    secs, 
    zone, 
    format = "cccc, dd LLL yyyy' | Local Time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => 
`http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormatedWeatherData;

export {formatToLocalTime, iconUrlFromCode};