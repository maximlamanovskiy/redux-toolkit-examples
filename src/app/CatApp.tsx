import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import getCatGif from "../actions/cats/getCatGif";
import getCatImage from "../actions/cats/getCatImage";
import getName from "../actions/name/getName";
import { RootState } from "../store/store";

import "./CatApp.css";

const CatApp = () => {
  const dispatch: ThunkDispatch<RootState, {}, AnyAction> = useDispatch();
  const data = useSelector((state: RootState) => state.catReducer.data);
  const name = useSelector((state: RootState) => state.nameReducer.name);

  const onFirstClick = () => {
    dispatch(getCatImage());
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
