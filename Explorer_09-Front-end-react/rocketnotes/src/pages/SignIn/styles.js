import styled from "styled-components";
import  backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  
`;

export const Form = styled.form`
  padding: 0 136rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  >h1{
    font-size: 48rem;
    color: ${({theme})=> theme.COLORS.ORANGE};

  }
  >h2{
    font-size: 24rem;
    margin: 48rem 0rem;
  }
  >p{
    font-size: 14rem;
    color: ${({theme})=> theme.COLORS.GRAY_100};
  }
  >a{
    color: ${({theme})=> theme.COLORS.ORANGE};
    margin-top: 40rem;
  }

`;

export const Background = styled.div`
  flex:1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;