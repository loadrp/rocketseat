import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.CARD_BROWN};

  border-radius: 16px;
  margin-top: 37px;
  padding: 32px;
  

  >div {
    display: flex;
  }
  
  > div > h2{
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: 24px;
    margin-right: 20px;
  }
  
  > div > div{
    color:${({theme})=> theme.COLORS.PINK};
    display: flex;
    align-items: center;
  }

  >p {
    margin-top: 10rem;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_500};
    text-align: justify;
    line-height: 20px;
  }

`;


