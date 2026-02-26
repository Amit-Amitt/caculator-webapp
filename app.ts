const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear") as HTMLButtonElement;
const equalsBtn = document.getElementById("equals") as HTMLButtonElement;

let currentInput: string = "";

buttons.forEach((button) => {
  const value = button.getAttribute("data-value");

  if (value) {
    button.addEventListener("click", () => {
      currentInput += value;
      display.value = currentInput;
    });
  }
});

clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

equalsBtn.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    display.value = result.toString();
    currentInput = result.toString();
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});
