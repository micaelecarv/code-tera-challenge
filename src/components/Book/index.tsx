import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Liked from '../../assets/liked';
import {USER_NAME} from '../../constants';
import { BookStyled, BookLiStyled, BookLiTextStyled, BookHearthIconStyled, IconHeartUnliked } from './style';

const fallbackImage = 'https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png'

interface BookItemProps {
  bookItem: {
    name: string;
    author: string;
    description: string;
    cover_picture: string;
    category: string;
    stock: number;
    users_who_liked: []
  }
}

export function Book(props: BookItemProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (Array.isArray(props.bookItem.users_who_liked)) {
      // @ts-ignore: Unreachable code error
      const isLiked = props.bookItem.users_who_liked.includes(USER_NAME)
      if (isLiked) {
        setLiked(true)
      }
    }
  }, []);

  const clickLikeButton = () => () => {
    if (Array.isArray(props.bookItem.users_who_liked)) {
                  // @ts-ignore: Unreachable code error
      const isLiked = props.bookItem.users_who_liked.includes(USER_NAME)
      if (isLiked) {
                    // @ts-ignore: Unreachable code error
        const userNameIndex = props.bookItem.users_who_liked.indexOf(USER_NAME)
        props.bookItem.users_who_liked.splice(userNameIndex, 1)
        setLiked(false)
      } else {
                    // @ts-ignore: Unreachable code error
        props.bookItem.users_who_liked.push(USER_NAME)
        setLiked(true)
      }
    }
  }
  return (
    <>
      {/* <div className="book"> */}
      <BookStyled>
          <li>
            <img alt={props.bookItem.name} src={props.bookItem.name === "Chobits" ? fallbackImage : props.bookItem.cover_picture} style={{height: '250px'}}/>
            {/* <div className="book-li"> */}
            <BookLiStyled>
              <Link to={{pathname: '/detail', state: props.bookItem }}>

                <BookLiTextStyled>
                  <p><strong>{props.bookItem.name}</strong></p>
                  <p>{props.bookItem.author}</p>
                  <p>{props.bookItem.category}</p>
                </BookLiTextStyled>  
              </Link>

              {/* <div className="hearth-icon"> */}
                <BookHearthIconStyled>
                  {liked ? (
                    <Liked onClick={clickLikeButton()}/>
                    ) : (
                    <IconHeartUnliked onClick={clickLikeButton()}/>
                  )}
                </BookHearthIconStyled>
            </BookLiStyled>
              {/* </div> */}
            {/* </div> */}

            {/* <h3>{props.bookItem.users_who_liked.length}</h3> */}
          </li>
      {/* </div> */}
      </BookStyled>
    </>
  );
}