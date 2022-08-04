import styled from 'styled-components';

export const ExpandSearchContainer = styled.section`
  position: relative;
  width: 100%;
  height: 460px;
  left: 0px;
  top: 0px;

  background: #ffffff;
`;

export const InputContainer = styled.section`
  position: absolute;
  width: 80%;
  height: 55px;
  left: 10%;
  top: 93px;

  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const InputCity = styled.input`
  box-sizing:border-box;

  position: absolute;
  width: 426px;
  height: 55px;
  left: 1px;
  top: 0px;
/* when activated boder should be 1px and boder radious 16px */
  border: 0px solid #333333; 
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1)); 
   border-radius: 0px;
`;

export const InputGuest = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: 425px;
  height: 55px;
  left: 428px;
  top: 0px;
/* when activated boder should be 1px and boder radious 16px */
  border: 0px solid #333333;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  border-radius: left 1px;
`;

export const SearchButton = styled.button`
  position: absolute;
  width: 126px;
  height: 55px;
  right: 133px;
  top: 0px;

  background: rgba(235, 87, 87, 0.9);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;
