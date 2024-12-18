class Calculator {
    constructor() {
        this.clear();
    }

    clear() {
        this.currentValue = "0";
        this.prevValue = null;
        this.operator = null;
    }

    appendNumber(number) {
        if (this.currentValue === "0" && number !== ".") {
            this.currentValue = number;
        } else {
            this.currentValue += number;
        }
    }

    appendDecimal() {
        if (!this.currentValue.includes(".")) {
            this.currentValue += ".";
        }
    }

    chooseOperation(operator) {
        if (this.operator !== null) this.compute();
        this.prevValue = this.currentValue;
        this.operator = operator;
        this.currentValue = "";
    }

    compute() {
        let result;
        const prev = parseFloat(this.prevValue);
        const current = parseFloat(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                result = current !== 0 ? prev / current : "Error";
                break;
        }

        this.currentValue = result.toString();
        this.operator = null;
        this.prevValue = null;
    }

    toggleSign() {
        if (this.currentValue !== "0") {
            this.currentValue = (parseFloat(this.currentValue) * -1).toString();
        }
    }

    toPercent() {
        this.currentValue = (parseFloat(this.currentValue) / 100).toString();
    }
}

module.exports = Calculator;
