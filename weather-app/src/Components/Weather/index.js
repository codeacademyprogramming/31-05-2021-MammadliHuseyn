import React from 'react';
import { getWeatherByCity } from './../../store/weather/actions';
import { useDispatch, useSelector } from 'react-redux';
import CityInfo from './CityInfo';

function Weather() {

    const [query, setQuery] = React.useState('');
    const dispatch = useDispatch();
    const cities = useSelector(state => state);

    const changeQuery = e => {
        setQuery(e.target.value);
    }

    // React.useEffect(() => {

    // }, [dispatch])


    const submitForm = e => {
        e.preventDefault();
        getWeatherByCity(query)(dispatch);
        setQuery('');
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="cityName">City name</label>
                <input
                    type="text"
                    id="cityName"
                    value={query}
                    onChange={changeQuery} />
                <button type="submit">get city info</button>
            </form>
            {cities.map(city =>
                <CityInfo
                    name={city.name}
                    temp={city.main.temp}
                    key={city.id} />
            )}
        </div>
    )
}

export default Weather
