/* ====================================================================
  Ejemplo de una página "feature", una vista principal.
  Incluye ejemplos rest y ejemplos de los
  hooks principales: useState, useEffect, useSelector y useDispatch.

  los componentes que dependen de esta vista no alteran directamente
  los datos, sino que dispachean acciones a este controlador, que ya
  sí ineractúa con el store.
==================================================================== */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dogsService from '../../core/services/dogs-services';
import { actionsDogs } from '../../store/reducers/dogs-reducer';

import DogsSelect from './components/dogs-select';
import DogList from './components/dog-list';
import DogListPreload from './components/dog-list-preload';
import Message from '../../components/ui/message';

import { IntDog } from '../../schemas/dogs';
import { IntHandleSelectDog } from './schemas/view-dogs-interfaces';


const ViewDogs: React.FC = () => {
  // estado interno
  const [ isLoad, setIsLoad ] = useState(false);
  const [ isLoadImages, setIsLoadImages ] = useState(false);
  const [ hasError, setHasError ] = useState(false);
  const [ errorMessage, setErrorMessage] = useState('');

  // store
  const dogs = useSelector( (state: any) => state.dogsReducer.dogs);
  const dogSelected = useSelector( (state: any) => state.dogsReducer.dogSelected);
  const dispatch = useDispatch();
  const { fetchDogs, selectDog, unselectDog } = actionsDogs();

  // servicios
  const { getDogs, getDogImages } = dogsService();

  useEffect(() => {

    if (!dogs.length) {
      setIsLoad(true);
      getDogs().then(
        (dogs) => {
          setIsLoad(false);
          if (Array.isArray(dogs)) {
            dispatch(fetchDogs(dogs));
          }

        }).catch( (err) => {
          setIsLoad(false);
          setHasError(true);
          setErrorMessage(err);
        });
    }

  }, [dispatch, dogs.length, getDogs, fetchDogs]);

  const handleSelectDog = (data: IntHandleSelectDog) => {
    if ( data.dog === 'noDogSelected' ||
        (data.dog === dogSelected.dog && dogSelected.specie === 'noDogSelected') ||
        (data.dog === dogSelected.dog && dogSelected.specie === data.specie) ) {
          return;
        }
    let url = data.dog;
    if (data.specie !== 'noDogSelected') {
      url += '/' + data.specie;
    }
    dispatch(unselectDog());
    selectDogAndImages(url, data);
  }

  const selectDogAndImages = (url: string, data: IntHandleSelectDog) => {
    setIsLoadImages(true);
    getDogImages(url).then(
      (images) => {
        setIsLoadImages(false);
        if (Array.isArray(images)) {
          const payload = {
            dog: data.dog,
            specie: data.specie,
            species: dogs.filter( (dog: IntDog) => dog.name === data.dog ).map( (dog: IntDog) => dog.species ),
            images: images
          }
          dispatch(selectDog(payload));
        }

      }).catch( (err) => {
        setIsLoad(false);
        setHasError(true);
        setErrorMessage('Error loading data ' + err);
      });

  }

  return (
    <section className="page view-dogs">
      { isLoad !== true && hasError === true && <Message type="error" message={errorMessage} aria-hidden={!hasError} /> }
      <DogsSelect list={dogs} disabledActions={isLoadImages} onSelectDog={handleSelectDog} />
      { isLoadImages === true && <DogListPreload aria-hidden={!isLoadImages} /> }
      { isLoadImages === false && <DogList dogSelected={dogSelected} aria-hidden={isLoadImages} /> }
    </section>
  );
}

export default ViewDogs;
