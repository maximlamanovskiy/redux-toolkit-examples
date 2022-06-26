import { AnyAction, combineReducers } from "redux";
import { RootState } from "../store/store";

import catReducer, { initialState as catInitialState } from "./catReducer";
import nameReducer, { initialState as nameInitialState } from "./nameReducer";

export const initialState: RootState = {
  catReducer: catInitialState,
  nameReducer: nameInitialState,
};

const rootReducer = (state = initialState, action: AnyAction) => {
  return combineReducers({
    catReducer,
    nameReducer,
  })(state, action);
};

export default rootReducer;
