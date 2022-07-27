import React from 'react';
import {
  Container,
  InputGuest,
  InputCity,
  SearchButton,
  Divider
} from './SearchStyles';

export const Search = () => {
  return (
    
      <Container>
      
          <InputCity>Helsinki, Finland</InputCity>
          <Divider></Divider>
          <InputGuest>Add Guest</InputGuest>
          <SearchButton>press</SearchButton>
       
      </Container>
    
  );
};
