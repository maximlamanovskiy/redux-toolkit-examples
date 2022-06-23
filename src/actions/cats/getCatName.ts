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

export default function getCatImage() {
  return {
    type: types.GET_CAT_NAME_SUCCESS,
    name: NAMES[Math.floor(Math.random() * 10)],
  };
}
