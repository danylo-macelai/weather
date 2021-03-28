import { findPlaceByPosition } from './place-data';
import { handleError } from "./http-utils"
import * as store from './store'

let current;

const successCallback = async (position) => {
  if (current.coords.latitude !== position.coords.latitude
    || current.coords.longitude !== position.coords.longitude) {
    current = {
      ...current,
      confirm: true,
      coords: position.coords,
    };
    await findPlaceByPosition(current);
    store.getPosition(current);
  }
}

const errorCallback = async (err) => {
  if (current.error !== err.code) {
    current = {
      ...current,
      confirm: true,
      disabled: err.code === 1,
      error: err.code,
    };
    await findPlaceByPosition(current);
    store.getPosition(current);
  }
}

async function getCurrentPosition(position) {
  if (!position.disabled) {
    try {
      store.getLoading(true);
      current = position;
      if (!("geolocation" in navigator)
        && !current.disabled) {
        current = {
          ...current,
          confirm: true,
          disabled: true,
        };
        await findPlaceByPosition(current);
        store.getPosition(current);
      } else {
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      }
    } catch (error) {
      store.getLoading(false);
      handleError(error)
    }
  }
}

export { getCurrentPosition };