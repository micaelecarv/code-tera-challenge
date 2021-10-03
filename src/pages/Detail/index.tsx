// import { Book } from "../components/Book";
import { Link } from "react-router-dom";
import Left from '../../assets/left';
import {USER_NAME} from '../../constants'
import { useState, useEffect, useContext } from 'react';
import ButtonLike from '../../assets/button-like';
import Liked from '../../assets/liked';
import LibraryContext from '../../context/libraryContext'

import { 
  DetailStyled,
  DetailContentStyled,
  DetailHearthIconStyled,
  DetailImageBookStyled,
  DetailSoldOutStyled,
  DetailReturnHomeStyled,
  HearthIcon
} from "./style";

interface BookDetailProps {
  name: string;
  author: string;
  description: string;
  cover_picture: string;
  category: string;
  stock: number;
  users_who_liked: [];
  librar: any;
}

export function Detail(props: any) {

  const [liked, setLiked] = useState(false);
  const { setState, state } = useContext(LibraryContext)
  const bookDetail: BookDetailProps = props.location.state;

  useEffect(() => {
    if (Array.isArray(props.location.state.users_who_liked)) {
      const isLiked = props.location.state.users_who_liked.includes(USER_NAME)
      if (isLiked) {
        setLiked(true)
      }
    } 
  }, []);

  const updateState = (usersWhoLiked: []) => {
    const updatedState = state.library.map(book => {
      if (book.name === props.location.state.name) {
        return {
          ...book,
          users_who_liked: usersWhoLiked
        }
      }
      return book
    })

    setState({
      ...state,
      library: updatedState
    })
  }

  const clickLikeButton = () => () => {
    if (Array.isArray(props.location.state.users_who_liked)) {
      const isLiked = props.location.state.users_who_liked.includes(USER_NAME)
      if (isLiked) {
        const userNameIndex = props.location.state.users_who_liked.indexOf(USER_NAME)
        props.location.state.users_who_liked.splice(userNameIndex, 1)
        setLiked(false)
      } else {
        props.location.state.users_who_liked.push(USER_NAME)
        setLiked(true)
      }
      updateState(props.location.state.users_who_liked)
    }
  }
  
  return (
    <>
      <DetailStyled>
        <DetailReturnHomeStyled to="/home">
          <Left />Voltar
        </DetailReturnHomeStyled>

        <DetailContentStyled>
          <div>
            <div>
              <h1>
                {bookDetail.name}
              </h1>
            </div>

            <HearthIcon>
              <h3>
                {bookDetail.author}
              </h3>

              <DetailHearthIconStyled>
                {liked ? (
                  <Liked onClick={clickLikeButton()}/>
                  ) : (
                  <ButtonLike onClick={clickLikeButton()}/>
                )}
              </DetailHearthIconStyled>
            </HearthIcon>

            <div>  
              <h3>{bookDetail.category}</h3>
              <h3>
                {bookDetail.stock > 0 ? `Em Estoque: ${bookDetail.stock} unidades` : `Fora de Estoque`}
              </h3>
            </div>

            <div>
              <span>{bookDetail.description}</span>
            </div>
          </div>
          <DetailImageBookStyled>
              <img src={bookDetail.cover_picture} />
              {bookDetail.stock === 0 && (
                <DetailSoldOutStyled>
                  <p>FORA DE ESTOQUE</p>
                </DetailSoldOutStyled>
              )}
          </DetailImageBookStyled>
          
        </DetailContentStyled>
      </DetailStyled>
    </>
  );
}