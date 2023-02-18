import styled from "styled-components";

export const Container = styled.section`
  margin: 28rem 0;
  >h2 {
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BG_700};

    padding-bottom: 16rem;
    margin-bottom: 24rem;

    color:  ${({theme, isPrincipal })=> isPrincipal ?  theme.COLORS.WHITE : theme.COLORS.GRAY_300};
    
    font-weight: 400;
  }

  .font-size-h1{
      font-size: 32rem;
  }
  .font-size-h2{
      font-size: 20rem;
  }

  h1{
    color: ${({theme})=> theme.COLORS.WHITE};
    font-size: 26rem;
    font-weight: 500;
  }
`
