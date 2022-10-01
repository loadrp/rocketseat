import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105rem;
  width: 100%;

  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BG_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80rem;

`;