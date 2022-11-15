import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105rem auto;
  grid-template-areas:
  "header"
  "content";
`

export const Form = styled.form`
  width: 550rem;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36rem;

    a {
      font-size: 20rem;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`
