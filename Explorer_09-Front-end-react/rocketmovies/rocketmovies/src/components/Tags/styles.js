import styled from "styled-components"

export const TagButton = styled.button`
  border: none;
  margin-right: 6px;
  margin-top: 15px;
  font-size: 12px;
  border-radius: 5px;
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme})=> theme.COLORS.BG_700};
  width: 121px;
  height: 24px;
  
`