import React from 'react';
import {
  Container,
  InputGuest,
  InputCity,
  SearchButton,
} from './SearchStyles';

export const Search = () => {
  return (
    
      <Container>
      
          <InputCity>Helsinki, Finland</InputCity>
          <InputGuest>Add Guest</InputGuest>
          <SearchButton>press</SearchButton>
       
      </Container>
    
  );
};
