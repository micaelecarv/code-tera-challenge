import styled from 'styled-components';

export const Container = styled.header`
  margin: 0px 0px 40px;
  
  background: ${(props: any) => props.theme.colors.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  
  @media(max-width: 720px) {
    padding: 1rem 1.5rem;
  }

  h1 {
    margin: 0px 50px 0px 0px;
    padding: 10px 0px 10px 0px;
    font-family: 'Rubik',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 59px;
    color: ${(props: any) => props.theme.colors.text_secondary};
  }
`;

