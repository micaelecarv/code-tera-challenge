import { useState, useEffect, useContext } from "react";
import { ListBooks } from "../../components/ListBooks";
import { SearchBooks } from "../../components/SearchBooks";
import { FilterBooks } from "../../components/FilterBooks";
import {LIMIT, USER_NAME} from '../../constants';
import ReactPaginate from 'react-paginate';

import { TotalBooks } from "../../styles/totalBooks";
import { SearchBooksStyled } from "../../components/SearchBooks/style";
import { FilterBooksStyled } from "../../components/FilterBooks/style";
import { HomeStyled, HomeContainerStyled, HomeListBooksContainerStyled } from "./style";
import LibraryContext from '../../context/libraryContext';
import './style.css'
import { useTheme } from "styled-components";

interface Library {
  name: string;
  author: string;
  description: string;
  cover_picture: string;
  category: string;
  stock: number;
  users_who_liked: [];
}

export function Home() {
  const { state } = useContext(LibraryContext)
  const theme = useTheme()

  const [filteredBooks, setFilteredBooks] = useState<Library[]>(state.library);
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [offsetPagination, setOffsetPagination] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)

  useEffect(() => {
    setFilteredBooks(state.library)
  }, [state]);

  const filterLibraryBySearch =  (isCategorySearch: boolean = false) => (keyboardPress: any) => {
    const value =  keyboardPress.target.value.toLowerCase()
    const filteredLibrary = state.library?.filter(book => {
      if (isCategorySearch) {
        return book.category.indexOf(value) >= 0
      }
      return book.name.toLowerCase().indexOf(value) >= 0
    })
    setFilteredBooks(filteredLibrary)
  }

  const filterLibraryByFilter = (selectionOption: any) => {
    const value = selectionOption.target.value;
    let filteredLibrary: any = [];
    let showCategory = false;
    switch (value) {
      case 'best-rating':
        filteredLibrary = [...state.library.sort((a: any, b: any) => {
          if (Array.isArray(a.users_who_liked) && Array.isArray(b.users_who_liked)) {
            if (a.users_who_liked.length > b.users_who_liked.length) {
              return 1;
            }
            if (a.users_who_liked.length < b.users_who_liked.length) {
              return -1;
            }
            if (a.users_who_liked.length === b.users_who_liked.length) {
              return 0;
            }
          }
          return 0;
        })]

        break;
      case 'in-stock':
        filteredLibrary = state.library.filter(book => {
          return book.stock > 0
        })
        break;
      case 'alphabetical-order':
        filteredLibrary = [...state.library.sort((a: any, b: any) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0
        })]
        break;
      case 'tanned-books':
        // eslint-disable-next-line array-callback-return
        filteredLibrary = state.library.filter(book => {
          if (Array.isArray(book.users_who_liked)) {
            // @ts-ignore: Unreachable code error
            return book.users_who_liked.includes(USER_NAME)
          }
        
        })
        break;
      case 'by-categories':
        showCategory = true
        filteredLibrary = state.library
        break;
    
      default:
        break;
    }
    setFilteredBooks(filteredLibrary);
    setShowCategoryInput(showCategory)
  }

  const handlePageClick = (data: any) => {
    setSelectedPage(Math.abs(data.selected - 1));
    setOffsetPagination(Math.ceil(selectedPage * LIMIT));
  };

  return (
    <HomeStyled>

      <HomeContainerStyled>
        <SearchBooksStyled>
          <span>
            <SearchBooks handleChangeInput={filterLibraryBySearch} />
          </span>
        </SearchBooksStyled>

        <FilterBooksStyled>
            <FilterBooks handleChangeSelect={filterLibraryByFilter} handleChangeInput={filterLibraryBySearch(true)} showCategory={showCategoryInput} />
        </FilterBooksStyled>
      </HomeContainerStyled>

      <TotalBooks>
        <p>Total: { filteredBooks.length || state.library.length}</p>
      </TotalBooks>

      <HomeListBooksContainerStyled>
          <ListBooks bookLibrary={filteredBooks.slice(offsetPagination, offsetPagination + LIMIT)} />
      </HomeListBooksContainerStyled>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={state.library.length / LIMIT}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={`pagination ${theme.title === 'dark' ? 'pagination-darkmode' : ''}`}
        activeClassName={'active'}
      />
    </HomeStyled>
  );
}