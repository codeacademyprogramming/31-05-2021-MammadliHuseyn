import React from 'react';

function CityInfo({ id, name, temp, deleteCity, measureHandler, country, description, icon }) {
    const { measureTemp, unit } = measureHandler(temp);
    return (
        <>
            <li className="city">
                <h2 className="city-name">
                    <span>{name}</span>
                    <sup>{country}</sup>
                </h2>
                <button
                    type="button"
                    onClick={() => deleteCity(id)} className="btn btn-danger">-</button>
                <div className="city-temp">{measureTemp.toFixed()}<sup>{unit}</sup></div>
                <figure>
                    <img className="city-icon" src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`} alt={description} />
                    <figcaption>{description}</figcaption>
                </figure>
            </li>
        </>

    )
}

export default CityInfo
