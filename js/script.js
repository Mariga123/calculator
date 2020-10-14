// var add = function (number1, number2) {
//     return number1 + number2;
// };
// var subtract = function (number1, number2) {
//     return number1 - number2;
// };
// var multiply = function (number1, number2) {
//     return number1 * number2;
// };
// var divide = function (number1, number2) {
//     return number1 / number2;
// };

// $(document).ready(function () {
//     $("form#add").submit(function (event) {
//         event.preventDefault();
//         var number1 = parseInt($("#add1").val());
//         var number2 = parseInt($("#add2").val());
//         var result = add(number1, number2);
//         $("#output").text(result);
//     });
// });

// $(document).ready(function () {
//     $("form#subtract").submit(function (event) {
//         event.preventDefault();
//         var number1 = parseInt($("#subtract1").val());
//         var number2 = parseInt($("#subtract2").val());
//         var result = subtract(number1, number2);
//         $("#output").text(result);
//     });
// });

// $(document).ready(function () {
//     $("form#multiply").submit(function (event) {
//         event.preventDefault();
//         var number1 = parseInt($("#multiply1").val());
//         var number2 = parseInt($("#multiply2").val());
//         var result = multiply(number1, number2);
//         $("#output").text(result);
//     });
// });

// $(document).ready(function () {
//     $("form#divide").submit(function (event) {
//         event.preventDefault();
//         var number1 = parseInt($("#divide").val());
//         var number2 = parseInt($("#divide").val());
//         var result = divide(number1, number2);
//         $("#output").text(result);
//     });
// });
function showresult(choice){
    var n1=parseFloat(document.getElementById('num1').value); //2
    var n2=parseFloat(document.getElementById('num2').value); //3
    var r; //result
    var c=choice; //user has 4 choices which are +,-,*,/
    switch(c)
        {
        case '1':
            r=n1+n2;
            break;
        case '2':
            r=n1-n2;
            break;
        
        case '3':
            r=n1*n2;
            break;
        
        case '4':
            r=n1/n2;
            break;
        default:
            break;
        }
document.getElementById('result').value=r;
}