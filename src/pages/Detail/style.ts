import styled from 'styled-components';
import { Link } from "react-router-dom";


export const DetailStyled = styled.div`
  max-width: 800px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  top: 32px;
  margin: 0 auto;
  background: ${(props: any) => props.theme.colors.background};
  color: ${(props: any) => props.theme.colors.text};

`;

export const HearthIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
`

export const DetailSectionStyled = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const DetailHearthIconStyled = styled.div`
  margin-left: 4px;
  margin-top: 4px;

  @media (max-width: 768px) {
    margin-top: -54px;
    z-index: 9;
    margin-right: 25px;
  }
`;

export const DetailContentStock = styled.div`
  position: absolute;
  right: 0;
  margin-right: 22px;
  margin-top: -30px;
`

export const DetailImageBookStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: fit-content;
  margin-left: 24px;
  
  img {
    width: 319px;
    height: 418px;
  }

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 100px;
  }
`;
  
  export const DetailSoldOutStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  text-align: center !important;
  background-color: rgba(192, 192, 192, 0.6);
  align-items: center;
  justify-content: center;
  
  p {
    height: fit-content;
    color: white;
    background-color: black;
    padding: 14px;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const DetailReturnHomeStyled = styled(Link)`
  position: relative;
  display: flex;
  justify-content: left;
  justify-content: center;
  left: -410px;
  top: -28px;
  font-size: 20px;
  text-decoration: none;
  color: gray;

  @media (max-width: 768px) {
    left: -37%;
  }
`;

export const DetailContent = styled.div`
  @media (max-width: 768px) {
    margin: 18px;
  }
`

export const DetailContentTitle = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    top: 0px;
    margin: 12px;
  }
`

export const DetailContentDescription = styled.div`
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`