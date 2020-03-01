import React from 'react';
import { IntDogSelected } from '../../../schemas/dogs';
import DogCard from './dog-card';

interface IntDogListProps {
  dogSelected: IntDogSelected;
}

const DogList: React.FC<IntDogListProps> = (props)  => {
  return (
    <div className="container-dog" role="main" data-qa="dogsList">
      {props.dogSelected.images.map((img: string, index: number) => {
        return <DogCard dogImg={img} key={index} />
      })}
    </div>
  );
};

export default DogList;