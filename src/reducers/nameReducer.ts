import { AnyAction } from "redux";

import * as types from "../actions/name/actionTypes";

export interface NameState {
  name?: string;
  id?: number;
}

export const initialState: NameState = {};

const nameReducer = (state = initialState, action: AnyAction): NameState => {
  switch (action.type) {
    case types.GET_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default: {
      return state;
    }
  }
};

export default nameReducer;
