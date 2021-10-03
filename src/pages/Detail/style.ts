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
  background: #f1ffff;
`;

export const HearthIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
`

export const DetailContentStyled = styled.div`
  display: flex;
`;

export const DetailHearthIconStyled = styled.div`
  margin-left: 4px;
  margin-top: 4px;
`;

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
`;