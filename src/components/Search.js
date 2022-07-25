import React from 'react';
import { Container, InputBar, InputsContainer, SearchButton } from './SearchStyles';

export const Search = () => {
  return (
    <>
      <Container>
        <InputsContainer>
          <InputBar />
        </InputsContainer>
        <InputsContainer>
          <InputBar />
        </InputsContainer>
        <InputsContainer>
          <SearchButton>Search</SearchButton>
        </InputsContainer>
      </Container>
    </>
  );
};
