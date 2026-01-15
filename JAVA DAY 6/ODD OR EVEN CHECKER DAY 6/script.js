function checkOddEven() {
    var number = document.getElementById("numberInput").value;
    var result = document.getElementById("result");

    if (number === "") {
        result.textContent = "Please enter a number";
        result.style.color = "red";
        return;
    }

    if (number % 2 === 0) {
        result.textContent = number + " is Even";
        result.style.color = "green";
    } else {
        result.textContent = number + " is Odd";
        result.style.color = "blue";
    }
}
