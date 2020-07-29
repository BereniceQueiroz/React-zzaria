import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Content } from './main.style';
import Header from 'Components/header';
import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes';

const ChoosePizzaSize = React.lazy(() => import('Pages/pizzaSize'));
const ChoosePizzaFlavours = React.lazy(() => import('Pages/pizzaFlavours'))

export default function Main() {

  return (
    <>
    <Header />
    <Content>
      <Suspense fallback='Loading ...'>
        <Switch>
          <Route path={HOME} exact component={ChoosePizzaSize} />
          <Route path={CHOOSE_PIZZA_FLAVOURS} exact component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>
    </Content>
    </>
  );
}


