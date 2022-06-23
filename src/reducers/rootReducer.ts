import { AnyAction, combineReducers } from "redux";

const rootReducer = (state = {}, action: AnyAction) => {
  return combineReducers({})(state, action);
};

export default rootReducer;
