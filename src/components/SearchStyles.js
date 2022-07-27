import styled from 'styled-components';

export const Container = styled.div`
position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  
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
position: absolute;
  width: 106px;
  height: 18px;
  left: 16px;
 
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

export const InputGuest = styled.div`
 position: absolute;
  width: 74px;
  height: 18px;
  left: 154px;
  right: 69px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
`;

export const SearchButton = styled.div`
position: absolute;
left: 263px;
right: 16.95px;
background: #eb5757;
`;

export const Divider = styled.div`
position: absolute;
width: 55px;
height: 0px;
right: 0px;
left: 106px;
top: 27px;

border: 1px solid #F2F2F2;
transform: rotate(90deg);
`
