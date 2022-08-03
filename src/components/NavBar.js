import React from 'react';
import {
  NavBarContainer,
  Logo,
  SearchContainer,
  Input,
  SearchButton,
  Divider,
} from './NavBarStyles';

export const NavBar = ({showInput}) => {
  return (
    <NavBarContainer >
      <Logo />
      <SearchContainer onClick={()=>showInput(true)}>
        <Input width='106px' left='16px' color='#333333'>
          Helsinki, Finland
        </Input>
        <Divider left='106px'></Divider>
        <Input width='74px' left='154px' color='#bdbdbd'>
          Add Guest
        </Input>
        <Divider right='19px'></Divider>
        <SearchButton>
          <span style={{ color: '#EB5757' }} class='material-icons'>
            search
          </span>
        </SearchButton>
      </SearchContainer>
    </NavBarContainer>
  );
};
