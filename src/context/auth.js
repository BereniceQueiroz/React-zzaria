import React, { createContext, useCallback, useState } from 'react';
import PropTypes from  'prop-types';
import  firebase from 'services/firebase'

export const AuthContext = createContext();

export default function Auth({ children }) {
  const [ userInfo, setUserInfo] = useState({ // recebe o stado do usuário
    isUserLoggedIn: false,
    user: null
  });

  const handleLogin = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const handleLogout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou')
      setUserInfo({
        isUserloggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: PropTypes.node.isRequired
}
