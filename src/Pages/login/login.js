import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { AuthContext } from 'context/auth';
import { Container, Logo, GitHubButton } from './login.style';

export default function Login() {
  const { handleLogin } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Logo/>
        </Grid>
        <Grid item container xs={12} justify='center' >
          <GitHubButton onClick={() => handleLogin()}>Entrar com GitHub</GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
};
