import React, { useState } from 'react';
import NeighborsDetail from './NeighborsDetail';

function Countries({ countriesState, loading }) {
  const [neighbors, setNeighbors] = useState([]);
  if (loading || !countriesState.length) return 'loading..';
  return (
    <div className="wrapper-countries">
      <div className="countries">
        <h1>Selected Countries</h1>
        <ul>
          {countriesState.map(country => {
            return (
              <li key={country.name}>
                <p>{country.name}</p>
                <button
                  onClick={() => {
                    setNeighbors(country.neighbors);
                  }}>
                  Show Neighbors{' '}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <NeighborsDetail neighbors={neighbors} />
    </div>
  );
}

export default Countries;
