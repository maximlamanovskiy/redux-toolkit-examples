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

export default function getName() {
  return {
    type: types.GET_NAME,
    name: NAMES[Math.floor(Math.random() * 10)],
  };
}
