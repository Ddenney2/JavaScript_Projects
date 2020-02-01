function addition_Function() {
    var addition = 8 + 8;
    document.getElementById("Math").innerHTML = "8 + 8 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 12 - 7;
    document.getElementById("Sub").innerHTML = "12 - 7 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 8 * 4;
    document.getElementById("Multi").innerHTML = "8 * 4 = " + simple_Math;
}

function division() {
    var simple_Math = 27 / 3;
    document.getElementById("Divi").innerHTML = "27 / 3 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (8 + 8) * 6 / 2 - 12;
    document.getElementById("Many").innerHTML = "8 plus 8, multiplied by 6, divided in half and then subtracted by 12 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Negat").innerHTML = -x;
}


    var X = 5;
    X++;
    document.write(X);

    var B = 5.25;
    B--;
    document.write(B);

    window.alert(Math.random() * 100);

    document.write(Math.round(1.8));
