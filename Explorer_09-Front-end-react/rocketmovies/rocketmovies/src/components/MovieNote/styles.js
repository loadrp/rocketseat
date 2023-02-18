import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.CARD_BROWN};

  border-radius: 16px;
  margin-top: 37px;
  padding: 32px;

  >h2{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
  }
  >p {
    margin-top: 20rem;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_500};
    text-align: justify;
    line-height: 20px;
  }

`;


