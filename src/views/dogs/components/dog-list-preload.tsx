import React from 'react';

const DogListPreload: React.FC = ()  => {
  return (
    <div className="container-dog" data-qa="dogsListPreload">
      <div className="card-dog card-dog__preload"></div>
      <div className="card-dog card-dog__preload"></div>
      <div className="card-dog card-dog__preload"></div>
    </div>
  );
};

export default DogListPreload;