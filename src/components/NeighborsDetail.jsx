import React from 'react';

function NeighborsDetail({ neighbors }) {
  return (
    <div className="neighbors-detail">
      <ul>
        {neighbors?.map(neighbor => {
          return <li key={neighbor}>{neighbor}</li>;
        })}
      </ul>
    </div>
  );
}

export default NeighborsDetail;
