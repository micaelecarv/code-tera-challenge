import Left from '../../assets/left';
import Right from '../../assets/right';
import { PaginationBeforeAfterStyled, PaginationStyled, PaginationNumber } from './style';

export function Pagination(props: any) {

  const LIMIT = 8;

  const clickOnPagination = (index:any) => () => {
    props.setPagination({
      ...props.pagination,
      offset: index
    })
  }
  
  return (
    <PaginationStyled>
      <PaginationBeforeAfterStyled>
        {props.pagination.offset > 0 && (
          <h2 onClick={clickOnPagination( Math.abs(props.pagination.offset - LIMIT))}> <Left /> </h2>
        )}
      </PaginationBeforeAfterStyled>
      <PaginationNumber>
        {Array.from({length: Math.floor(props.libraryLength / LIMIT + 1)}).map((item, index) => {
          console.log("INDEX", index)
          return (
            <h3 onClick={clickOnPagination((props.pagination.limit * (index + 1)) - LIMIT)}>
              {index < Math.floor(props.libraryLength / LIMIT) && (
                <>
                  {index + 1}
                </>
              )}
            </h3>
          )
        })}
      </PaginationNumber>
      <PaginationBeforeAfterStyled>
        {props.pagination.offset + LIMIT < props.libraryLength && (
          <h2 onClick={clickOnPagination(Math.abs(props.pagination.offset + LIMIT))}> <Right /> </h2>
        )}
      </PaginationBeforeAfterStyled>
    </PaginationStyled>
  )
}