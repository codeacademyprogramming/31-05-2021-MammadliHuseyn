import axios from 'axios';
import { ACTION_TYPES } from './../actionTypes';
const apiKey = "af6e0a6c0cb014eff6a9dc473b056967";

export const getWeatherByCity = (city) => {
    return (dispatch) => {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(
                ({ data }) => dispatch({ type: ACTION_TYPES.GET_WEATHER_BY_CITY, payload: data }),
                err => console.log(err)
            );
    };
}

export const deleteWeatherbyCity = (id) => {
    return {
        type: ACTION_TYPES.DELETE_WEATHER_BY_CITY,
        payload: id
    }
}