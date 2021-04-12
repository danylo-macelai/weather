import * as store from "./store"
import { findWeathers } from "./weather-data"
import { get, handleError } from "./http-utils"
import API_URL from './config';

const resolution = (data) => {
  return data;
}

const getPlaces = async (url) => {
  const places = await get(url)
    .then(json => resolution(json))
    .catch(error => handleError(error));
  if (!Array.isArray(places) || places.length === 0) {
    throw new Error('invalid parameter');
  }
  store.getPlaces(places);
  return places[0];
}

const getWeathers = async (woeid) => {
  const weathers = await findWeathers(woeid);
  store.getToday(weathers.shift());
  store.getWeathers(weathers);
}

async function findPlaceByPosition(position) {
  try {
    store.getLoading(true);
    const url = `${API_URL}/location/search/?lattlong=${position.coords.latitude},${position.coords.longitude}`;
    const place = await getPlaces(url);
    await getWeathers(place.woeid);
    store.getPlace(place);
  } catch (error) {
    handleError(error);
  } finally {
    store.getLoading(false);
  }
}

async function findPlaceByQuery(query) {
  try {
    store.getLoading(true);
    await getPlaces(`${API_URL}/location/search/?query=${query}`);
  } catch (error) {
    handleError(error);
  } finally {
    store.getLoading(false);
  }
}

async function findPlaceByWoeid(place) {
  try {
    store.getPlace(place);
    store.getLoading(true);
    await getWeathers(place.woeid);
  } catch (error) {
    handleError(error);
  } finally {
    store.getLoading(false);
  }
}

function toggleMeasurement(measurement) {
  try {
    store.getLoading(true);
    store.getMeasurement(measurement);
  } catch (error) {
    handleError(error);
  } finally {
    store.getLoading(false);
  }
}

export { findPlaceByQuery, findPlaceByPosition, findPlaceByWoeid, toggleMeasurement };