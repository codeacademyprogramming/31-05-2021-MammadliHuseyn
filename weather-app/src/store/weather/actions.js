import axios from 'axios';
import { ACTION_TYPES } from './../actionTypes';

export const getWeatherByCity = (city) => {
    return (dispatch) => {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16596fe956171a7376f2ba91213e3499`)
            .then(
                ({ data }) => dispatch({ type: ACTION_TYPES.GET_WEATHER_BY_CITY, payload: data }),
                err => console.log(err)
            );
    };
}

export const deleteWeatherbyCity = (id) => {
    return {
        type:ACTION_TYPES.DELETE_WEATHER_BY_CITY,
        payload:id
    }
}