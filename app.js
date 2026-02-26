var display = document.getElementById("display");
var buttons = document.querySelectorAll("button");
var clearBtn = document.getElementById("clear");
var equalsBtn = document.getElementById("equals");
var currentInput = "";
buttons.forEach(function (button) {
    var value = button.getAttribute("data-value");
    if (value) {
        button.addEventListener("click", function () {
            currentInput += value;
            display.value = currentInput;
        });
    }
});
clearBtn.addEventListener("click", function () {
    currentInput = "";
    display.value = "";
});
equalsBtn.addEventListener("click", function () {
    try {
        var result = eval(currentInput);
        display.value = result.toString();
        currentInput = result.toString();
    }
    catch (_a) {
        display.value = "Error";
        currentInput = "";
    }
});
