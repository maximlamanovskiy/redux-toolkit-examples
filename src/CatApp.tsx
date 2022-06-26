import {
  getCatImageWithApi,
  getCatImageWithFetcher,
  getCatImageWithApiFetcher,
  getCatGif,
  CAT_SLICE,
} from "./features/cat/catSlice";
import { getName, NAME_SLICE } from "./features/name/nameReducer";
import { getCatAndName, useAppDispatch, useAppSelector } from "./store/hooks";
import { RootState } from "./store/store";

import "./CatApp.css";

const CatApp = () => {
  const dispatch = useAppDispatch();
  // const data = useAppSelector((state) => state[CAT_SLICE].data);
  // const name = useAppSelector((state) => state[NAME_SLICE].name);
  const { data, name } = useAppSelector((state) => getCatAndName(state));

  const onFirstClick = () => {
    dispatch(getCatImageWithApi());
    dispatch(getName());
  };

  const onSecondClick = () => {
    dispatch(getName());
    dispatch(getCatGif());
  };

  return (
    <div className="cat-app">
      <div className="cat-container">
        {data ? <img alt="cute cat" src={data} /> : null}
      </div>
      {name ? <h1>Hi, there! This little buddy is {name}</h1> : null}
      <div className="cat-buttons">
        <button onClick={onFirstClick}>Click me</button>
        <button onClick={onSecondClick}>Or me</button>
      </div>
    </div>
  );
};

export default CatApp;
