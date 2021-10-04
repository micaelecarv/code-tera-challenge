import styled from 'styled-components';

export const HomeStyled = styled.div`
  background: ${(props: any) => props.theme.colors.background};
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
`;

export const HomeContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 100px;

  @media (max-width: 768px) {
    margin: 0px 12px;
  }
`;

export const HomeListBooksContainerStyled = styled.div`
  margin-left: 50px;
  margin-top: 60px;

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

