import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { ReactComponent as MainLogo } from 'assets/logo.svg';

export const Container = styled.div`
  padding: 40px;
`;

export const Logo = styled(MainLogo)`
  width:100%;
`;

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    border: none;
    font-size: 22px;
    max-width: 480px;
    margin: auto;
    padding: 15px;
    text-transform: none;
    width: 100%;
  }
`;

