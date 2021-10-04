import styled from 'styled-components';

export const ListBooksStyled = styled.div`
  margin: 40px 0px 0px;
  display: flex;
  font-family: 'Rubik', sans-serif;
  
  ul {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-flow: row wrap;
    width: 100%;
  }

  li {
    background: ${(props: any) => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    list-style: none;
  }

  li p {
    margin-top: 4px;
    width: 198px;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    color: ${(props: any) => props.theme.colors.text};
  }

  strong {
    display: block;
    width: 100%;
    height: 26%;
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.75rem;
    color: ${(props: any) => props.theme.colors.text};
  }
`;