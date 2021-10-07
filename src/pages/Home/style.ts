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

export const TotalBooks = styled.p`
  position: absolute;
  margin-top: 16px;
  margin-left: 100px;
  padding-left: 2px;
  width: 177px;
  height: 18px;

  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: ${(props: any) => props.theme.colors.text};

  @media (max-width: 768px) {
    margin: 12px;
    margin-top: 24px
  }
`;

