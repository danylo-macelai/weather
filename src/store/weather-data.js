import { get, handleError } from "./http-utils"
import API_URL from './config';

const resolution = (data) => {
  const weathers = data.consolidated_weather;
  return weathers;
}

async function findWeathers(woeid) {
  return await get(`${API_URL}/location/${woeid}`)
    .then(json => resolution(json))
    .catch(error => handleError(error));
}

export { findWeathers };