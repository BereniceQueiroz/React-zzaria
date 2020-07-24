import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Content } from './main.style';
import Header from 'Components/header';

const ChoosePizzaSize = React.lazy(() => import('Pages/pizzaSize'));
const ChoosePizzaFlavours = React.lazy(() => import('Pages/pizzaFlavours'))

export default function Main() {

  return (
    <>
    <Header />
    <Content>
      <Suspense fallback='Loading ...'>
        <Switch>
          <Route path='/' exact component={ChoosePizzaSize} />
          <Route  path='/sabores-da-pizza' component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>
    </Content>
    </>
  );
}


