import styled from 'styled-components';
import Left from '../../assets/left';
import Right from '../../assets/right';

export const PaginationStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  text-align: center;
  cursor: pointer;
`;

export const PaginationBeforeAfterStyled = styled.span`
  min-width: 50px;
  svg {
    margin: 4px 0;
  }
`;

export const PaginationNumber = styled.div`
  display: flex;
  p {
    margin: 4px 16px;
    color: ${(props: any) => props.theme.colors.text};
  }
`;

export const RightArrow = styled(Right)`
  stroke: ${(props: any) => props.theme.colors.text};
`;
export const LeftArrow = styled(Left)`
  stroke: ${(props: any) => props.theme.colors.text};
`;