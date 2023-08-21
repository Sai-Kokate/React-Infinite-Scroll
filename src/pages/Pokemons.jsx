import React from "react";
import Card from "../components/Card";

const Pokemons = ({ pokeData }) => {
  return (
    <div className="container">
      {pokeData.map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Pokemons;
