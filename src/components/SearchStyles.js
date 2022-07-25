import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &:hover {
    color: red;
    width: 500px;
  }
`;

export const InputsContainer = styled.div`
  position: relative;
  width: 100px;
  height: 50px;
  box-sizing: border-box;
`;

export const InputBar = styled.input`
  position: relative;
  line-height: 30px;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  font-size: 2rem;
`;

export const SearchButton = styled.button`
  color: red;

`;
