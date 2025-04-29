document.getElementById("btn1").addEventListener("click", function () {
    let num1 = parseFloat(document.getElementById("num-1").value) || 0;
    let num2 = parseFloat(document.getElementById("num-2").value) || 0;
    document.getElementById("res-1").value = num1 + num2;

})
document.getElementById("btn2").addEventListener("click", function () {
    let num3 = parseFloat(document.getElementById("num-3").value) || 0;
    let num4 = parseFloat(document.getElementById("num-4").value) || 0;
    document.getElementById("res-2").value = num3 - num4;

})
document.getElementById("btn3").addEventListener("click", function () {
    let num5 = parseFloat(document.getElementById("num-5").value) || 0;
    let num6 = parseFloat(document.getElementById("num-6").value) || 0;
    document.getElementById("res-3").value = num5 * num6;

})
document.getElementById("btn4").addEventListener("click", function () {
    let num5 = parseFloat(document.getElementById("num-7").value) || 0;
    let num6 = parseFloat(document.getElementById("num-8").value) || 0;
    document.getElementById("res-4").value = num5 / num6;

})