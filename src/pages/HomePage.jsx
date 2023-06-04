import React, { useContext } from 'react';
import { PokemonList } from '../components/PokemonList';
import { PokemonContext } from '../context/PokemonContext';

export const HomePage = () => {

    const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

    return (
        <>
       
        <PokemonList></PokemonList>
      
    </>
);
    };
