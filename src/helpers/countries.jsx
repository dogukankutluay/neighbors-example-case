export const countriesSortRandom = async (countries, countriesSliceLength) => {
  return countries
    .sort(() => Math.random() - Math.random())
    .slice(0, countriesSliceLength);
};
export const countriesUrlOpen = async countries => {
  let datas = [];
  for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    const response = await fetch(element.url);
    const json = await response.json();
    datas.push({
      name: element.name,
      neighbors: json.neighbors.map(neighbor => neighbor.name),
    });
  }
  return datas;
};
