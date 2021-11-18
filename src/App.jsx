import React, { useEffect, useState } from 'react';

//helpers
import { countriesUrlOpen, countriesSortRandom } from './helpers/countries';
import {
  sortAndJoinCurrentNeighbors,
  findNeighbors,
} from './helpers/neighbors';
//components
import Countries from './components/Countries';
import Header from './components/Header';
import Neighbors from './components/Neighbors';
function App() {
  const [countriesState, setCountriesState] = useState([]);
  const [neighborsState, setNeighborsState] = useState([]);
  const [countriesSliceLength, setCountriesSliceLength] = useState(10);

  const [loadings, setLoadings] = useState({
    neighboarsLoading: false,
    countriesLoading: false,
  });
  const getCountries = async () => {
    setLoadings({
      neighboarsLoading: true,
      countriesLoading: true,
    });
    const response = await fetch('https://travelbriefing.org/countries.json');
    const data = await response.json();
    const currentCountriesData = await countriesSortRandom(
      data,
      countriesSliceLength
    );
    const openedCountriesUrl = await countriesUrlOpen(currentCountriesData);
    setCountriesState(openedCountriesUrl);
    const currentNeighborsData = await findNeighbors(openedCountriesUrl);
    const generateNeighborsData = await sortAndJoinCurrentNeighbors(
      currentNeighborsData
    );
    setLoadings({
      neighboarsLoading: false,
      countriesLoading: false,
    });

    setNeighborsState(generateNeighborsData);
  };
  useEffect(() => {
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Header
        getCountries={getCountries}
        setCountriesSliceLength={setCountriesSliceLength}
      />
      <Countries
        countriesState={countriesState}
        loading={loadings.countriesLoading}
      />
      <Neighbors
        neighborsState={neighborsState}
        loading={loadings.neighboarsLoading}
      />
    </div>
  );
}

export default App;
