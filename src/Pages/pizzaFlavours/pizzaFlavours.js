import React from 'react';
import types from "prop-types"

export default function PizzaFlavours({ location }) {
  console.log( location )
  return (
    <h1>Escolha o sabor de sua pizza</h1>
  );
}

PizzaFlavours.propTypes = {
  location: types.object.isRequired
}

