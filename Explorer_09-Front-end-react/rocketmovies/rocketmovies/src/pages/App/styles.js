import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64rem 0;
    

  }

  .title{
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    
    >button{
      width: 207px;
      height: 48px;
    }
  }

  
 
`;

export const Links = styled.ul`
  list-style: none;
  
  >li {
    margin-top: 12rem;
    text-decoration: none;
    a {
      color: ${({theme})=> theme.COLORS.WHITE}
    }
  }
`

export const Content = styled.div`
  max-width: 1137rem;
  margin: 0 auto;
  padding: 20px;

  > h1{
    font-size: 32rem;
    font-weight: 400;
    padding-top: 64rem;
  }

  >p {
    font-size: 16rem;
    margin-top: 16rem;
  }

  

`