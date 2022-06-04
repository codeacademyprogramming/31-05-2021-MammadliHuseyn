import React from 'react';
import { getWeatherByCity, deleteWeatherbyCity } from './../../store/weather/actions';
import { useDispatch, useSelector } from 'react-redux';
import CityInfo from './CityInfo';
import { MEASURE_TYPES } from './../../store/weather/measureTypes';

function Weather() {

    const [query, setQuery] = React.useState('');
    const [measure, setMeasure] = React.useState(MEASURE_TYPES.KELVIN);
    const dispatch = useDispatch();
    const cities = useSelector(state => state);

    const changeQuery = e => {
        setQuery(e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        getWeatherByCity(query)(dispatch);
        setQuery('');
    }
    const deleteCity = id => {
        const isConfirmed = window.confirm("are you sure to delete?");
        if (isConfirmed) {
            dispatch(deleteWeatherbyCity(id));
        }
    }
    const measureChangeHandler = e => {
        const type = e.target.value;
        setMeasure(type);
    }
    const measureHandler = temp => {
        switch (measure) {
            case MEASURE_TYPES.KELVIN:
                return { measureTemp: temp, unit: "°K" };
            case MEASURE_TYPES.CELCIUS:
                return { measureTemp: temp - 273.15, unit: "°C" };
            case MEASURE_TYPES.FEHRENHEIGHT:
                return { measureTemp: (temp * 9 / 5) - 459.67, unit: "°F" };
            default:
                return temp;
        }
    }

    return (
        <div>
            <section className="top-banner">
                <div className="container">
                    <h1 className="heading">Simple Weather App</h1>
                    <form onSubmit={submitForm} className="mb-3">
                        <input
                            type="text"
                            placeholder="Search for a city"
                            autoFocus
                            value={query}
                            onChange={changeQuery} />
                        <button type="submit">SUBMIT</button>
                        <span className="msg"></span>
                    </form>
                    {Object.values(MEASURE_TYPES).map(mtype =>
                        <div key={mtype} className="form-check">
                            <input
                                onChange={measureChangeHandler}
                                type="radio" name="measureBy"
                                className="form-check-input"
                                value={mtype}
                                id={mtype}
                                checked={measure === mtype && true} />
                            <label
                                htmlFor={mtype}
                                className="form-check-label">
                                {mtype}
                            </label>
                        </div>
                    )}
                </div>
            </section>
            <section className="ajax-section">
                <div className="container">
                    <ul className="cities">
                        {cities.map(city =>
                            <CityInfo
                                name={city.name}
                                temp={city.main.temp}
                                country={city.sys.country}
                                description={city.weather[0].description}
                                icon={city.weather[0].icon}
                                key={city.id}
                                id={city.id}
                                measureHandler={measureHandler}
                                deleteCity={deleteCity} />
                        )}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Weather
