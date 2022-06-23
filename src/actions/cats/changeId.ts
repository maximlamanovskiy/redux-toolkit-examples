import { AnyAction } from "redux";
import { CHANGE_ID } from "./actionTypes";

export default function changeId(id: number): AnyAction {
  return {
    type: CHANGE_ID,
    id,
  };
}
