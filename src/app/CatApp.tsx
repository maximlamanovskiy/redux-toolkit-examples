import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import getCatImage from "../actions/cats/getCatImage";
import "./CatApp.css";

function CatApp() {
  const dispatch: ThunkDispatch = useDispatch();
  return (
    <div className="cat-app">
      <div />
      <button onClick={() => dispatch(getCatImage())}>Click me</button>
    </div>
  );
}

export default CatApp;
