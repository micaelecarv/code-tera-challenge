import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components'

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <h1>Livraria do Cowboy</h1>
        
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor='#ff2'
        onColor='#000'
      />
    </Container>
  );
};

export default Header;