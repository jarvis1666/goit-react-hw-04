//npm install react-loader-spinner
import { Circles } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

export const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#00000"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
