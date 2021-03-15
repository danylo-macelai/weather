import * as store from "./store"
import { displayWeathersInfo } from "./weather-data"
import { httpGet, handleError } from "./http-utils"
import API_URL from './config';

const doFill = (data) => {
  let places = data.map(place => {
    return {
      title: place.title,
      woeid: place.woeid,
    };
  });
  return places;
}

async function fetchPlaces(url) {
  const places = await httpGet(url)
    .then(json => doFill(json))
    .catch(error => handleError(error))
  await displayWeathersInfo(places[0]);
  store.getPlaces(places);
}

async function displayPlaceByQuery(query) {
  await fetchPlaces(`${API_URL}/location/search/?query=${query}`)
}

async function displayPlaceByPosition(position) {
  await fetchPlaces(`${API_URL}/location/search/?lattlong=${position.latitude},${position.longitude}`)
}

export { displayPlaceByQuery, displayPlaceByPosition };