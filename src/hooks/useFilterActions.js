import { useDispatch, useSelector } from "react-redux";
import { getOpenModalFilter } from "../redux/filter/selectors";
import { toggleFilter } from "../redux/filter/filtersSlice";
import { useCallback } from "react";
export const useFilterActions = () => {
  const dispatch = useDispatch();
  const isOpenFilter = useSelector(getOpenModalFilter);
  const handleToggleFilter = useCallback(() => {
    dispatch(toggleFilter(!isOpenFilter));
  }, [dispatch, isOpenFilter]);

  return { handleToggleFilter, isOpenFilter };
};
