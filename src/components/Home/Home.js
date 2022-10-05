import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome!Let's learn about countries</h1>
            <Link to='countries'><button>Country List</button></Link>
        </div>
    );
};

export default Home;