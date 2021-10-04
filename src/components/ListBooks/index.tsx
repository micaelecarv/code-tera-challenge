// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Book } from "../Book";
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
