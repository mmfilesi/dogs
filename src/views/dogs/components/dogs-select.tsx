import React, { useState }  from 'react';
import { IntDog } from '../../../schemas/dogs';
import { IntHandleSelectDog } from '../schemas/view-dogs-interfaces';

import AppButton from '../../../components/forms/app-button';
import AppSelect from '../../../components/forms/app-select';

interface IntDogsSelectProps {
  readonly list: Array<IntDog>;
  readonly disabledActions: boolean;
  onSelectDog(dogData: IntHandleSelectDog): any;
}

const DogsSelect: React.FC<IntDogsSelectProps> = (props)  => {
  const [dogPreselect, setDogPreselect] = useState('noDogSelected');
  const [speciePreselect, setSpeciePreselect] = useState('noDogSelected');

  // user actions
  const handleSelectDog = (val: string) => {
    setDogPreselect(val);
    setSpeciePreselect('noDogSelected');
  };

  const selectDog = () => {
    if (dogPreselect !== 'noDogSelected' && !props.disabledActions) {
      props.onSelectDog({
        dog: dogPreselect,
        specie: speciePreselect
      });
    }
  };

  // render
  const mapDogsToSelect = () => {
    return props.list.map((dog: IntDog) => {
      return {
        key: dog.name,
        value: dog.name  + (dog.species.length > 0 ? ' *' : '')
      }
    });
  };

  const mapSpeciesToSelect = () => {
    const species = props.list.filter((dog) => {
      return dog.name === dogPreselect;
    });

    if (!species.length) {
      return [];
    }
    return species[0].species.map((dog: string) => {
      return {
        key: dog,
        value: dog
      }
    });
  };

  return (
    <nav className="dog-form dog-select__container" role="navigation">

      <AppSelect
        required={true}
        noSelectionLabel="Select"
        valueNoSelection="noDogSelected"
        tabIndex={1}
        idQa="selectDog"
        handleOnChange={handleSelectDog}
        list={mapDogsToSelect()}
      ></AppSelect>

      <AppSelect
        required={false}
        noSelectionLabel="Select"
        valueNoSelection="noDogSelected"
        tabIndex={2}
        idQa="selectSpecie"
        handleOnChange={setSpeciePreselect}
        list={mapSpeciesToSelect()}
        disabled={!mapSpeciesToSelect().length}
      ></AppSelect>

      <AppButton
        label="Images"
        disabled={dogPreselect === 'noDogSelected' || props.disabledActions}
        tabIndex={3}
        handleClick={selectDog}
        idQa="submitSelectDog"
      ></AppButton>
    </nav>
  );
};

export default DogsSelect;