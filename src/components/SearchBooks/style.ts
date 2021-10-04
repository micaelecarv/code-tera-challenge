import styled from 'styled-components';

export const SearchBooksStyled = styled.div`
  
  span {
    background: #ffffff;
    border: 1px solid #d0d0d0;
    box-sizing: border-box;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  }

  input {
    width: 485px;
    height: 20px;
  
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
  
    padding-left: 27px;
    padding-right: 101px;
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media (max-width: 768px) {
    width: 45%;

    input {
      width: 100%;
      padding-left: 8px;
      padding-right: 0px;
    }
  }
`;