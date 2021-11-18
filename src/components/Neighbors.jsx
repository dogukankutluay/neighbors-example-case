import React from 'react';

const NeighborsList = ({ loading, neighborsState }) => {
  if (loading) return 'loading...';
  if (!neighborsState.length) return 'No groupings found';
  return (
    <ul>
      {neighborsState.map(neighbor => {
        return (
          <li key={neighbor}>
            <span>{neighbor}</span>
          </li>
        );
      })}
    </ul>
  );
};

function Neighbors({ neighborsState, loading }) {
  return (
    <div>
      <h1>Neighbors</h1>
      <NeighborsList neighborsState={neighborsState} loading={loading} />
    </div>
  );
}

export default Neighbors;
