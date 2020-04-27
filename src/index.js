const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
let count = 0;

const updateText = () => {
  number.innerHTML = count;
};

const handleAdd = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
