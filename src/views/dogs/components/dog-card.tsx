import React, { useState } from 'react';

interface IntDogCardProps {
  dogImg: string;
  key?: number;
}

const DogCard: React.FC<IntDogCardProps> = (props)  => {
  const [classImg, setClassImg] = useState('card-dog__image--horizontal');

  const setStyle = (img: any) => {
    if (img.naturalHeight > img.naturalWidth) {
      setClassImg('card-dog__image--vertical');
    }
  };

  return (
    <div className="card-dog">
      <figure className="card-dog__figure">
        <img
          onLoad={e => setStyle(e.target)}
          className={'card-dog__image ' + classImg} src={props.dogImg} alt={props.dogImg}  />
      </figure>
    </div>
  );
};

export default DogCard;