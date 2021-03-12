import * as store from "./store"

function successCallback(pos) {
  store.getLoading(false);
  store.getPosition({
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  });
}

function errorCallback(error) {
  store.getLoading(false);
}

function displayPositionInfo() {
  store.getLoading(true);
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

export { displayPositionInfo };