function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a awesome choice!";
    switch(Animals) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break; 
        case "Bird":
            Animal_Output = "Bird" + Animal_String;
        break;
        case "Snake":
            Animal_Output = "Snake" + Animal_String;
        break;
        case "Horse":
            Animal_Output = "Horse" + Animal_String;
        break;
        case "Turtle":
            Animal_Output = "Turtle" + Animal_String;
        break;
        case "Llama":
            Animal_Output = "Llama" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter an answer exactly as written on the above list.";
    }
    document.getElementById("Animal").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[O].innerHTML = "The text has changed";
}

var c = document.getElementById("Word_Canvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);