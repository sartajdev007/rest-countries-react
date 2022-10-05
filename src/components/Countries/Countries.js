import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Countries.css'

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h1>There are all countries: {countries.length}</h1>
            <h3>Country List:</h3>
            {
                countries.map(country => <div className='country'>
                    <h2>Name: {country.name.common}</h2>
                    <h4>Capital: {country.capital}</h4>
                    <Link to={`/country/${country.name.common}`} key={country.cca2}><button>Show Details</button></Link>
                </div>)
            }

        </div>
    );
};

export default Countries;