var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var X = 10; /*Only works for Add_numbers_3 because dorectly below it. Won't work for Add_numbers_4 at same time.*/
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6() {
    console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else {
        Vote = "You are old enough vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}



function Age_Function() {
    if (Age < 50) {
        document.getElementById("Ouch").innerHTML = "You may be headed over the hill.";
    }
    else {
        Age = "You still have a ways to go.";
    }
    document.getElementById("Yay").innerHTML = Age;
}
