import { ACTION_TYPES } from './../actionTypes';

export const reducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_WEATHER_BY_CITY:
            return [
                ...state,
                action.payload
            ];
        case ACTION_TYPES.DELETE_WEATHER_BY_CITY:
            return state.filter(city=>city.id !== action.payload);
        default:
            return state;
    }
}