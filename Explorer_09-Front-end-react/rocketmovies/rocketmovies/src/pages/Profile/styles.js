import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  >header {
  margin: 0 auto;
  height: 144rem;
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.BG_800};
  }
    
`;

export const Form = styled.form`
  max-width: 340rem;
  margin: 0 auto;

  >img{
    width: 150rem;
    border-radius: 50%;
   }
  
  >div:nth-child(4){
    margin-top: 24rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100rem auto 32rem;
  width: 186px;
  height: 186px;
  
  >img{
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  >label{
    width: 48rem;
    height: 48rem;
    background-color: ${({theme})=> theme.COLORS.PINK};
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7rem;
    right: 7rem;
    cursor: pointer;

    >input{
      display: none;

    }

    >svg{
      width: 20rem;
      height: 20rem;
      color: ${({theme}) => theme.COLORS.BG_800};
    }
  }
`;