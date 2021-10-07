import React, { createContext, useState, useEffect } from 'react';
import { api } from '../../services/api';

type Book = {
  name: string;
  author: string;
  description: string;
  cover_picture: string;
  category: string;
  stock: number;
  users_who_liked: [];
}

type PropsLibraryContext = {
  state: { library: Book[] },
  setState: React.Dispatch<React.SetStateAction<{library: Book[]}>>
}

const DEFAULT_VALUE = {
  state: {
    library: []
  },
  setState: () => {}
}

const LibraryContext = createContext<PropsLibraryContext>(DEFAULT_VALUE)

const LibraryContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState({library: []});

  useEffect(() => {
    const data = api.get('https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge')
    data.then(dataRequest => {
      // @ts-ignore: Unreachable code error
      setState({...state, library: [...dataRequest.data]});
    })
  }, []);

  return (
    // @ts-ignore: Unreachable code error
    <LibraryContext.Provider value={{state, setState}}>
      {children}
    </LibraryContext.Provider>
  )
}

export { LibraryContextProvider }

export default LibraryContext;