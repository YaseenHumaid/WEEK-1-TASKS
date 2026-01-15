function calculate(operator) {

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result;

    if (operator === '+') {
        result = n1 + n2;
    } 
    else if (operator === '-') {
        result = n1 - n2;
    } 
    else if (operator === '*') {
        result = n1 * n2;
    } 
    else if (operator === '/') {
        if (n2 === 0) {
            result = "Cannot divide by 0";
        } else {
            result = n1 / n2;
        }
    }

    document.getElementById("result").innerText = result;
}
