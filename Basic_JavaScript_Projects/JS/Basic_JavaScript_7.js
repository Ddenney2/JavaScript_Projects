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
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 50) {
        Old = "You may be headed over the hill.";
    }
    else {
        Old = "You still have a ways to go.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Old;
}

function Time_Function() {
    var Time = new Date ().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morming time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
