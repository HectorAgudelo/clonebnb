import styled from "styled-components";
import logoImg from "./../Resources/logo.png"


export const NavBarContainer = styled.div`
position: fixed;
top: 0px;
left: 0px;
right: 0px;
height: 15%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;

`

export const Logo = styled.img.attrs({
    src: `${logoImg}`
})`
position: absolute;
top: 49px;
left: 94px;
width: 80px;
height: 18px;

`

export const SearchContainer = styled.div`
  position: absolute;
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
`;

export const Input = styled.div`
  text-align: center;
  position: absolute;
  width: ${(props) => props.width};
  height: 18px;
  left: ${(props) => props.left};
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.color};
`;

export const SearchButton = styled.div`
  position: absolute;
  width:17.05px;
  height: 19px;
  left:263px;
  bottom: 18.94px;

`;

export const Divider = styled.div`
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 55px;
  height: 0px;
  top: 27px;
  border: 1px solid #f2f2f2;
  transform: rotate(90deg);
`;