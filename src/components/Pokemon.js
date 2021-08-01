import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                return response.json();
            }).then(response => {
                setPokemon(response.results);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <ol style={{width: "100px", margin: "20px auto"}}>
                {
                    pokemon.map((pokemon, i) => {
                        return (
                            <li key={i}>{pokemon.name}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Pokemon;