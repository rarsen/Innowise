const Calculator = require("./calculator");
import "../styles.css";

const screen = document.getElementById("screen");
const buttons = document.querySelector(".buttons");
const themeSelect = document.getElementById("theme-select");

const calculator = new Calculator();

buttons.addEventListener("click", (event) => {
    const target = event.target;

    if (target.dataset.number) {
        calculator.appendNumber(target.dataset.number);
    } else if (target.dataset.action) {
        switch (target.dataset.action) {
            case "clear":
                calculator.clear();
                break;
            case "equals":
                calculator.compute();
                break;
            case "add":
                calculator.chooseOperation("+");
                break;
            case "subtract":
                calculator.chooseOperation("-");
                break;
            case "multiply":
                calculator.chooseOperation("*");
                break;
            case "divide":
                calculator.chooseOperation("/");
                break;
            case "sign":
                calculator.toggleSign();
                break;
            case "percent":
                calculator.toPercent();
                break;
            case "decimal":
                calculator.appendDecimal();
                break;
        }
    }

    screen.textContent = calculator.currentValue;
});


themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    
    document.body.className = "";
    document.body.classList.add(selectedTheme);
    
    localStorage.setItem("theme", selectedTheme);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "default";
    document.body.classList.add(savedTheme);
    themeSelect.value = savedTheme;
});
