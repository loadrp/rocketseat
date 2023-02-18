import styled from "styled-components";

export const Container = styled.div`
   grid-area: header;
   gap: 50rem;

    height: 116rem;
    width: 100%;

    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BG_700};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80rem;

    >h2{
      color: ${({theme})=> theme.COLORS.PINK}
    }

`
export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 46rem;
    height: 46rem;
    border-radius: 50%;
  }

  >div {
    display: flex;
    flex-direction: column;
    width: 100rem;
    margin-left: 5rem;
    line-height: 14rem;
    font-size: 15rem;
    gap: 5rem;
  
  >a{
    color: ${({theme})=> theme.COLORS.PINK}
  }
  
  }

`
export const Input = styled.input`
  width: 100%;
  height: 50rem;
  display: flex;
  align-items: center;
  border: none;
  padding: 10rem;

  background-color: ${({theme})=> theme.COLORS.BG_900};
  color: ${({theme})=> theme.COLORS.GRAY_300};

  border-radius: 10px;

  >svg{
      margin-left: 16rem;
    }

`
