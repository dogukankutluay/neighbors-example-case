export const sortAndJoinCurrentNeighbors = async datas => {
  return [
    ...new Set(
      datas.map(data => {
        return data.sort().join(' - ');
      })
    ),
  ];
};
export const findNeighbors = async countries => {
  let datas = [];
  for (let i = 0; i < countries.length; i++) {
    const { name } = countries[i];
    for (let k = 0; k < countries.length; k++) {
      const thisNeighbors = countries[k].neighbors;
      const parentNeighbors = countries[i].neighbors;

      thisNeighbors.map(neighbor => {
        if (neighbor === name && parentNeighbors.includes(countries[k].name)) {
          return datas.push([name, countries[k].name]);
        }
        return 0;
      });
    }
  }
  return datas;
};
