import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250rem auto;
  grid-template-rows: 105rem 128rem auto 64rem;
  grid-template-areas: "brand header"
  "menu search"
  "menu content"
  "newnote content";
`;
export const Brand = styled.div``;
export const Menu = styled.ul``;
export const Search = styled.div``;
export const Content = styled.div``;
export const NewNote= styled.button``;

export const Container = styled.