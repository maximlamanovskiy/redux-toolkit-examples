import * as types from "./actionTypes";

const NAMES = [
  "Luna",
  "Milo",
  "Oliver",
  "Leo",
  "Loki",
  "Bella",
  "Charlie",
  "Willow",
  "Lucy",
  "Simba",
];

export default function getCatName() {
  return {
    type: types.GET_CAT_NAME_SUCCESS,
    name: NAMES[Math.floor(Math.random() * 10)],
  };
}
