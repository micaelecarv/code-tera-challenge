import React from 'react';

import { LibraryContextProvider } from './libraryContext';

const GlobalContext: React.FC = ({ children }) => {
  return <LibraryContextProvider>{children}</LibraryContextProvider>
}

export default GlobalContext;