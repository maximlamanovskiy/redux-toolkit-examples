import { applyMiddleware, CombinedState, createStore } from "redux";
import thunk from "redux-thunk";
import { CatState } from "../reducers/catReducer";
import { NameState } from "../reducers/nameReducer";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export interface RootState
  extends CombinedState<{
    catReducer: CatState;
    nameReducer: NameState;
  }> {}

export default store;
