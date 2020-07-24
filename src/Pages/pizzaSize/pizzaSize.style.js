import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CardActionArea, Divider, Grid, Typography } from '@material-ui/core';


export const MaterialDivider = styled(Divider)`
  margin: 20px 0;
  width: 100%;
`;

export const Titles = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})`
  @media (max-width: 768px)  {
    font-size: 20px
  }
`;

export const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  /* padding: 20px; */
`;

export const CardActionPizza= styled(CardActionArea).attrs({
  component: Link
})`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
export const Pizza = styled.div`
  background: #fff;
  height: 200px;
  width: 200px;
  border: 1px solid #CCC;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    background: #CCC;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    width: 160px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 160px;
  }
`

export const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  width: 80px;
  height: 60px;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:1;
`;
