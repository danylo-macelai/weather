import { get } from 'svelte/store';
import * as store from './store'
import { displayPlaceByPosition } from './place-data'

const doLoadData = async (position) => {
  await displayPlaceByPosition(position);
  store.getPosition(position);
}

const successCallback = async (pos) => {
  const position = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  };
  await doLoadData(position);
}

const errorCallback = async (error) => {
  const { position } = store.state;
  let positionDefault = get(position);
  if (positionDefault.latitude === undefined) {
    positionDefault = {
      latitude: 60.165249,
      longitude: 24.936056,
    }
  }
  await doLoadData(positionDefault);
}

function displayPositionInfo() {
  store.getLoading(true);
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

export { displayPositionInfo };