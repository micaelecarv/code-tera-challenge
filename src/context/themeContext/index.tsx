import React, { createContext, useState } from 'react';
import LightTheme from '../../styles/themes/ligth'

type Theme = {
  header: string;
  background: string;
  input: string;
  text: string;
  text_secondary: string;
  text_terciary: string;
  icon: string;
}

type PropsThemeContext = {
  state: { theme: Theme },
  setState: React.Dispatch<React.SetStateAction<{theme: Theme}>>
}

const DEFAULT_VALUE = {
  state: {
    theme: LightTheme.colors
  },
  setState: () => {}
}
    // @ts-ignore: Unreachable code error
const ThemeContext = createContext<PropsThemeContext>(DEFAULT_VALUE)

const ThemeContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState({ theme: LightTheme.colors });

  return (
    // @ts-ignore: Unreachable code error
    <ThemeContext.Provider value={{state, setState}}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider }

export default ThemeContext;