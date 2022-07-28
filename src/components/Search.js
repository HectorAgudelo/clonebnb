import React from 'react';
import {
  Container,
  Input,
  SearchButton,
  Divider,
} from './SearchStyles';

export const Search = () => {
  return (
    <Container>
      <Input width='106px' left='16px' color='#333333'>
        Helsinki, Finland
      </Input>
      <Divider left='106px'></Divider>
      <Input width='74px' left='154px' color='#bdbdbd'>
        Add Guest
      </Input>
      <Divider right='19px'></Divider>
      <SearchButton><span style={{color:"#EB5757"}} class="material-icons">search</span></SearchButton>
    </Container>
  );
};
