import styled from "styled-components";

export const Container = styled.div`
  
    width: 1137px;
    gap:40px;
    margin: auto;
    

    > .Voltar {
      display: flex;
      margin-top: 40rem;
      align-items: center;
      margin-bottom: 20px;

      > Button {
        margin-top: 0;
        padding-left: 0px;
        
        width: 100rem;
        height: 25rem;
        background-color: ${({theme}) => theme.COLORS.BG_800};
        color:${({theme}) => theme.COLORS.PINK};
      
      }}
    
    
    > .title__rating {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 24px;
      > h1 {
        font-size: 36px;
      }
    };

    > div.data__Author {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      margin-bottom: 40rem;

      > img {
        height: 16px;
        width: 16px;
        border-radius: 50%;
      }
    };
    

    > .description {
      margin-top: 40rem;
      line-height: 25px;
 
    };
  

  
`;