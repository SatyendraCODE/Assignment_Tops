
let subTotal_1 = document.getElementById("subTotal_1");
let Price_1 = document.getElementById("Price_1").textContent;
Price_1 = Number(Price_1);
let subTotal_2 = document.getElementById("subTotal_2");
let Price_2 = document.getElementById("Price_2").textContent;
Price_2 = Number(Price_2);
let row_1 = document.getElementById('row_1');
let row_2 = document.getElementById('row_2');
let subTotal_All = document.getElementById("subTotal_All");

function check_value_1(value) {
    subTotal_1.innerText = (value * Price_1);
    // alert(Price_1)
}
function check_value_2(value) {
    subTotal_2.innerText = (value * Price_2);
    // alert(Price_1)
}
function Delete_Row_1() {
    row_1.remove();
    subTotal_1.innerText = 0;
    SumOfSubTotal();
}
function Delete_Row_2() {
    row_2.remove();
    subTotal_2.innerText = 0;
    SumOfSubTotal();
}
function SumOfSubTotal() {
    subTotal_All.innerText = (Number(subTotal_1.textContent) + Number(subTotal_2.textContent));
    // alert("hy");
}