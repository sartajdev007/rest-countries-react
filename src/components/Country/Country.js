import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const details = useLoaderData()[0];
    console.log(details)
    return (
        <div>
            <h1>Country Details</h1>
            <img src={details.flags.png} alt="" />
            <h3>Name: {details.name.common}</h3>
            <h4>Capital: {details.capital}</h4>
            <p><small>Continent: {details.continents}</small></p>
        </div>
    );
};

export default Country;