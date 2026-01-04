import { useDispatch } from "react-redux";
import {
  setComment,
  setDesignElements,
  setForm,
  setSize,
  setTaste,
} from "../redux/customProduct/customProductSlice";

export const useCustomProduct = () => {
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    dispatch(setForm(e.target.value));
  };
  const handleSizeChange = (e) => {
    dispatch(setSize(e.target.value));
  };

  const handleTasteChange = (e) => {
    dispatch(setTaste(e.target.value));
  };

  const handleDesignChange = (e) => {
    dispatch(setDesignElements(e.target.value));
  };

  const handleCommentChange = (e) => {
    dispatch(setComment(e.target.value));
  };

  return {
    handleFormChange,
    handleSizeChange,
    handleTasteChange,
    handleDesignChange,
    handleCommentChange,
  };
};
