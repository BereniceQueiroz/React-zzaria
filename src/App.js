import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import type from 'prop-types'
import  firebase from 'services/firebase';
import { LinearProgress } from '@material-ui/core';
import { AuthContext } from 'context/auth';

const Login = lazy(() => import('Pages/login'))
const MainPage = lazy(() => import('Pages/main'))

export default function App({ location }) { // recebe location de Route como prop para verificar o pathname
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [ didCheckedUserIn, setDidCheckedUserIn ] = useState(false)
  const { isUserloggedIn } = userInfo // pegar a variável de userInfo para fazer a verificaçao do usuário se esta logado ou nao

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserloggedIn: !!user,
        user : user && { // se user != null cria um novo objeto com os dados de user
          ...user,
          firstName: user.displayName.split(" ")[0]
        }
      })
      setDidCheckedUserIn(true) //depois da verificaçao o valor do estado é alterado
    })
  }, [setUserInfo]) // sem depedencia, carrega somente 1 vez

  if(!didCheckedUserIn) {
    return <LinearProgress />
  };

  if(isUserloggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }
  if(!isUserloggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  return (
    <Suspense fallback={ <LinearProgress /> }>
      <Switch>
        <Route  path='/login' exact component={Login}/>
        <Route  path='/' exact component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: type.object.isRequired
}

