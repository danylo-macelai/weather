import * as store from "./store"
import API_URL from './config';

// ---------------------------------------------- Position

const successCallback = (pos) => {
  store.getLoading(false);
  store.getPosition({
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  });
}

const errorCallback = (error) => {
  store.getLoading(false);
}

function displayPositionInfo() {
  store.getLoading(true);
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

// ---------------------------------------------- Weathers

const get = async (url) => {
  const response = await fetch(url)
  const status = response.status
  if (status >= 200 && status < 300) {
    return await response.json()
  }
  else {
    throw { status: status, body: await response.json() }
  }
}

const doFill = (location) => {
  let weathers = location.consolidated_weather.map(weather => {
    return {
      weatherStateName: weather.weather_state_name,
      weatherStateAbbr: weather.weather_state_abbr,
      windDirectionCompass: weather.wind_direction_compass,
      created: weather.created,
      applicableDate: weather.applicable_date,
      minTemp: weather.min_temp,
      maxTemp: weather.max_temp,
      theTemp: weather.the_temp,
      windSpeed: weather.wind_speed,
      windDirection: weather.wind_direction,
      airPressure: weather.air_pressure,
      humidity: weather.humidity,
      visibility: weather.visibility,
      predictability: weather.predictability,
    };
  });
  return weathers;
}

const handleError = error => {
  console.log(error); S
}

async function displayWeathersInfo(woeid) {
  store.getLoading(true);
  let weathers = await get(`${API_URL}/location/${woeid}`)
    .then(json => doFill(json))
    .catch(error => handleError(error))
  store.getWeathers(weathers);
  store.getLoading(false);
}

// ---------------------------------------------- Exports

export { displayPositionInfo, displayWeathersInfo };