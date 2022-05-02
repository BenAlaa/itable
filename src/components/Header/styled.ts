import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  -webkit-box-shadow: 0px 2px 19px -9px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 0px 2px 19px -9px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 2px 19px -9px rgba(0, 0, 0, 0.32);
`;

export const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
`;

export const Brand = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  background-color: #ff7043;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
`;
