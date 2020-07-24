import React, { useContext, useState} from 'react';
import { AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import {
  ContainerBar,
  LogoContainer,
  Logo
} from './header.style';
import { AuthContext } from 'context/auth'

export default function Header() {
  const [ anchorElement, setAnchorElement ] = useState(null);
  const { userInfo, handleLogout } = useContext(AuthContext);

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose= () => {
    setAnchorElement(null)
  }
  return (
    <AppBar >
      <ContainerBar>
        <Toolbar >
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Typography color='inherit'>Olá {userInfo.user.firstName}</Typography>
          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            // open irá se basear no valor boleano=!! de anchorElement
            open={!!anchorElement}
            onClose={handleClose}
            //será posiciona sobre o elemento que receber o estado anchorElement
            anchorEl={anchorElement}
            >
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </ContainerBar>
    </AppBar>
  )
}

