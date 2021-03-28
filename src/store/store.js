import { writable, derived } from "svelte/store";

const state = {
    loading: writable(true),
    position: writable({
        coords: {
            latitude: 60.165249,
            longitude: 24.936056,
        },
        confirm: false,
        disabled: false,
    }),
    place: writable({}),
    places: writable([]),
    today: writable({}),
    weathers: writable([]),
};

const getLoading = value => {
    state.loading.update(old => value);
};

const getPosition = position => {
    state.position.update(old => position);
};

const getPlace = place => {
    state.place.update(old => place);
};

const getPlaces = places => {
    state.places.update(old => places);
};


const getToday = today => {
    state.today.update(old => today);
};

const getWeathers = weathers => {
    state.weathers.update(old => weathers);
};

export { state, getLoading, getPosition, getPlace, getPlaces, getToday, getWeathers };