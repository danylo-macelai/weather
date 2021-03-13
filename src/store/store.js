import { writable } from "svelte/store";

const state = {
    loading: writable(false),
    position: writable({
        latitude: 36.96,
        longitude: -122.02,
    }),
    weathers: writable([{},{},{},{},{},{},]),
};

const getLoading = value => {
    state.loading.update(old => value);
};

const getPosition = position => {
    state.position.update(old => position);
};

const getWeathers = weathers => {
    state.weathers.update(old => weathers);
};

export { state, getLoading, getPosition, getWeathers };