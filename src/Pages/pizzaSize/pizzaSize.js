import React, { Fragment, useContext } from 'react';
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core';
import {
  CardActionPizza,
  MaterialDivider,
  Pizza,
  PizzasGrid,
  PizzaText,
  Titles
} from './pizzaSize.style';
import { AuthContext } from 'context/auth';
import pizzaSizes from 'fake-data/pizzasSizes'

export default function PizzaSize() {
  const { userInfo } = useContext(AuthContext);

  return (
    <Fragment>
    <Grid container direction='column' alignItems='center'>
        <Titles variant='h3' gutterBottom>O que vai ser hoje, {userInfo.user.firstName}?</Titles>
        <Titles variant='h4' gutterBottom>Escolha o tamanho da pizza:</Titles>
      </Grid>
      <PizzasGrid container >
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs >
            <Card>
             <CardActionPizza to='/sabores-da-pizza'>
              <Pizza>
                <PizzaText>{pizza.size} cm</PizzaText>
              </Pizza>
              <MaterialDivider />
              <Typography variant='h5'>{pizza.name}</Typography>
              <Typography>{pizza.slices} fatias, {pizza.flavours} {pizza.flavours === 1 ? 'sabor' : 'sabores'}</Typography>
             </CardActionPizza>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Fragment>
  )
}
