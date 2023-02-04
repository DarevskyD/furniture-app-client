import { theme } from '../../styles/Theme';
import { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Hamburger from './Hamburger';
import {
  Container,
  Wrapper,
  LeftNav,
  Logo,
  MainNav,
  MenuItemWrapper,
  MenuItem,
  RightNav,
  Language,
  Registration,
  RegistrationItem,
  Cart,
} from '../../styles/home/Header.styled';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 36) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Wrapper>
        <LeftNav>
          <Hamburger />
          <Logo>F_DESIGN</Logo>
        </LeftNav>
        <MainNav>
          <MenuItemWrapper>
            <MenuItem href="#">HOME</MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem href="#">SHOP</MenuItem>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <MenuItem href="#">MAGAZINE</MenuItem>
          </MenuItemWrapper>
        </MainNav>
        <RightNav>
          <Language>EN</Language>
          <Registration>
            <RegistrationItem>LOGIN</RegistrationItem>
            <RegistrationItem>SIGN IN</RegistrationItem>
          </Registration>
          <Cart>
            <Badge
              badgeContent={1}
              sx={{
                '& .MuiBadge-badge': {
                  color: theme.colors.light,
                  backgroundColor: theme.colors.additionalMd,
                },
              }}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Cart>
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default Header;
