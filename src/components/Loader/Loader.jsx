import { BeatLoader } from "react-spinners";
import { LoaderWrap, LoaderText } from "./Loader.styled";

export const Loader = ({ text = "Завантажуємо десерти…" }) => {
  return (
    <LoaderWrap>
      <BeatLoader color="#9b7cff" size={14} />
      {text && <LoaderText>{text}</LoaderText>}
    </LoaderWrap>
  );
};