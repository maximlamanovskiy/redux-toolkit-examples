import { AnyAction } from "redux";

import * as types from "../actions/cats/actionTypes";

export interface NameState {
  name?: string;
  id?: number;
}

export const initialState: NameState = {};

const nameReducer = (state = initialState, action: AnyAction): NameState => {
  switch (action.type) {
    case types.CHANGE_ID: {
      return {
        ...state,
        id: action.id,
      };
    }
    case types.GET_CAT_NAME_SUCCESS: {
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
