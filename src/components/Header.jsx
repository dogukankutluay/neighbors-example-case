import React from 'react';

function Header({ getCountries, setCountriesSliceLength }) {
  return (
    <div>
      <button onClick={getCountries}>Generate Groupings</button>
      <select
        onChange={event => {
          setCountriesSliceLength(Number(event.target.value));
        }}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}

export default Header;
