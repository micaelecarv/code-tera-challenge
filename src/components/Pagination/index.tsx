import { LIMIT } from '../../constants';
import { PaginationBeforeAfterStyled, PaginationStyled, PaginationNumber, RightArrow, LeftArrow } from './style';

export function Pagination(props: any) {

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
          <h2 onClick={clickOnPagination( Math.abs(props.pagination.offset - LIMIT))}> <LeftArrow /> </h2>
        )}
      </PaginationBeforeAfterStyled>
      <PaginationNumber>
        {Array.from({length: Math.floor(props.libraryLength / LIMIT + 1)}).map((item, index) => {
          return (
            <>
              {index < Math.floor(props.libraryLength / LIMIT) && (
                <p style={{fontWeight: `${props.pagination.offset / LIMIT === index ? 'bold' : 'normal'}`}} onClick={clickOnPagination((props.pagination.limit * (index + 1)) - LIMIT)}>
                  {index + 1}
                </p>
              )}
            </>
          )
        })}
      </PaginationNumber>
      <PaginationBeforeAfterStyled>
        {props.pagination.offset + LIMIT < props.libraryLength && (
          <h2 onClick={clickOnPagination(Math.abs(props.pagination.offset + LIMIT))}> <RightArrow /> </h2>
        )}
      </PaginationBeforeAfterStyled>
    </PaginationStyled>
  )
}