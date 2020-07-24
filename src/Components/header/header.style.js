import styled from 'styled-components';
import { ReactComponent as HeaderLogo } from 'assets/logo.svg';

export const ContainerBar = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  flex-grow: 1;
`;

export const Logo = styled(HeaderLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: #FFF;
  }

  & line {
    stroke: #FFF;
  }

  @media (max-width: 600px)  {
    width: 150px;
    height: 50px;
  }
`;

