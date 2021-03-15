import * as store from "./store"
import { httpGet, handleError } from "./http-utils"
import API_URL from './config';

const doFill = (data) => {
  let weathers = data.consolidated_weather.map(weather => {
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

async function displayWeathersInfo(place) {
  store.getLoading(true);
  const weathers = await httpGet(`${API_URL}/location/${place.woeid}`)
    .then(json => doFill(json))
    .catch(error => handleError(error))
  store.getWeathers(weathers);
  store.getLoading(false);
}

export { displayWeathersInfo };