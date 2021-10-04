import { FilterByCategory, FilterInput } from "./style";

export function FilterBooks(props: any) {

  return (
    <>
      {props.showCategory && (
        <FilterByCategory type="text" placeholder="Nome da categoria" onChange={props.handleChangeInput} />
      )}
        <FilterInput name="filter" onChange={props.handleChangeSelect}>
          <option value="" disabled selected hidden>Filtros</option>
          <option value="best-rating">Melhores Avaliados</option>
          <option value="in-stock">Em estoque</option>
          <option value="alphabetical-order">Ordem Alfabética</option>
          <option value="tanned-books">Livros Curtidos</option>
          <option value="by-categories">Por Categoria</option>
        </FilterInput>
    </>
  );
}
