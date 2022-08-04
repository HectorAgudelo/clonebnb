import React from 'react';

import {
  ExpandSearchContainer,
  InputContainer,
  InputCity,
  InputGuest,
  SearchButton,
} from './SearchNavStyle';

export const SearchNav = ({ closeInput }) => {
  return (
    <ExpandSearchContainer onClick={() => closeInput(false)}>
      <InputContainer>
        <InputCity></InputCity>
        <InputGuest></InputGuest>
        <SearchButton></SearchButton>
      </InputContainer>
    </ExpandSearchContainer>
  );
};
