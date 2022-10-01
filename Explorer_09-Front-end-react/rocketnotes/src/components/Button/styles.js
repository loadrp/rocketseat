import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BG_800};

  height: 56rem;
  border: 0;
  padding: 0 16rem;
  margin-top: 16rem;
  border-radius: 10rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
  

`;