"use strict";
var elementOne;
var tela = document.querySelector("#input");
var numberOne;
var op;
function setNumber(id) {
    document.querySelector(`#${id}`)?.addEventListener("click", function () {
        tela.value += document.querySelector(`#${id}`)?.textContent;
    });
}
function deleteChars() {
    document.querySelector("#back")?.addEventListener("click", function () {
        tela.value = tela.value.slice(0, -1);
    });
    document.querySelector("#c")?.addEventListener("click", function () {
        tela.value = "";
    });
}
deleteChars();
setNumber("one");
setNumber("two");
setNumber("three");
setNumber("four");
setNumber("five");
setNumber("six");
setNumber("seven");
setNumber("eight");
setNumber("nine");
setNumber("zero");
setNumber("point");
function setOperatoin(operatoin) {
    document.querySelector(`#${operatoin}`)?.addEventListener("click", function () {
        op = operatoin;
        numberOne = tela.value;
        tela.value = "";
    });
}
setOperatoin("sum");
setOperatoin("sub");
setOperatoin("div");
setOperatoin("mult");
function calc() {
    let result;
    document.querySelector("#equal")?.addEventListener("click", function () {
        switch (op) {
            case "sum":
                result = parseFloat(numberOne) + parseFloat(tela.value);
                break;
            case "sub":
                result = parseFloat(numberOne) - parseFloat(tela.value);
                break;
            case "mult":
                result = parseFloat(numberOne) * parseFloat(tela.value);
                break;
            case "div":
                result = parseFloat(numberOne) / parseFloat(tela.value);
                break;
        }
        tela.value = result.toFixed(2);
    });
}
calc();
