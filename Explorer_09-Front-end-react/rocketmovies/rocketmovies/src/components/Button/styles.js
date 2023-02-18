import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BG_800};
  align-items: center;
  justify-content: center;
  display: flex;
  

  height: 56rem;
  border: 0;
  padding: 0 16rem;
  margin-top: 16rem;
  border-radius: 10rem;
  font-weight: 700;

  &:disabled {
    opacity: 0.5;
  }

  >svg{
      margin-right: 3rem;
    }
  

`;