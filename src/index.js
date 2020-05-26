import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return 0;
  }
};

const countStore = createStore(countModifier);

const onChnage = () => {
  console.log(countStore.getState());
  console.log("there was a change on the store");
  number.innerText = countStore.getState();
};

countStore.subscribe(onChnage);

plus.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
