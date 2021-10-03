import styled from 'styled-components';

export const PaginationStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  text-align: center;
`;

export const PaginationBeforeAfterStyled = styled.span`
  min-width: 50px;
  svg {
    margin: 4px 0;
  }
`;

export const PaginationNumber = styled.div`
  display: flex;
  h3 {
    margin: 4px 16px;
  }
`