import {  useState, useEffect} from 'react';
import { Book } from "../Book";
import ButtonLike from '../../assets/button-like';
import Liked from '../../assets/liked';
import {USER_NAME} from '../../constants'


import { ListBooksStyled } from './style';

interface Library {
  bookLibrary: {
    name: string;
    author: string;
    description: string;
    cover_picture: string;
    category: string;
    stock: number;
    users_who_liked: [];
  }[]
}

export function ListBooks(props: Library) {
  return (
    <section>
      <ListBooksStyled>
        <ul>
          {props.bookLibrary?.map(book => { 
            return (
              <Book key={Math.random()} bookItem={book} />
            )
          })}
        </ul>
      </ListBooksStyled>
    </section>
  );
}
