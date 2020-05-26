import { createStore } from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD";
const DELETE_TODO = "DELETE";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  // console.log(state, action);
  switch (action.type) {
    // Do not mutate the state !!!
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchDeletToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeletToDo);
    btn.innerText = "DEL";
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const onSubmit = (e) => {
  e.preventDefault();
  if (input.value === "") {
    return;
  }
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
