import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  width: 297px;
  height: 55px;
  left: 1047px;
  top: 32px;

  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  /* &:hover {
    color: red;
    width: 500px;
  } */
`;

export const InputCity = styled.div`
  position: relative;
  width: 106px;
  height: 18px;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  color: #333333;
`;

export const InputGuest = styled.div`
  position: relative;
  width: 74px;
  height: 18px;

  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  color: #bdbdbd;
`;

export const SearchButton = styled.div`
  position: relative;

  background: #eb5757;
`;
