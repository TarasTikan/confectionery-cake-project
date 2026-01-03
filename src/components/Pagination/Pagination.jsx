import { useDispatch, useSelector } from "react-redux";
import {
  getPage,
  getPageCount,
  getPaginatedProducts,
} from "../../redux/pagination/selectors";
import { setPage } from "../../redux/pagination/paginationSlice";

export const Pagination = () => {
  const dispatch = useDispatch();
  const products = useSelector(getPaginatedProducts);
  const pageCount = useSelector(getPageCount);
  const page = useSelector(getPage);
  return (
    <>
      {!products.length || (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => dispatch(setPage(value))}
          size="small"
        />
      )}
    </>
  );
};
