import { writable, derived } from "svelte/store";

const state = {
    loading: writable(false),
    places: writable([{}]),
    position: writable({}),
    weathers: writable([{}]),
};

const getLoading = value => {
    state.loading.update(old => value);
};
const getPlaces = place => {
    state.places.update(old => place);
};

const getPosition = position => {
    state.position.update(old => position);
};

const getWeathers = weathers => {
    state.weathers.update(old => weathers);
};

const place = derived(state.places, $places => {
    return $places[0];
});

const today = derived(state.weathers, $weathers => {
    return $weathers[0];
});

export { state, place, today, getLoading, getPlaces, getPosition, getWeathers };