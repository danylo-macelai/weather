import * as store from "./store"

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

export { displayPositionInfo };