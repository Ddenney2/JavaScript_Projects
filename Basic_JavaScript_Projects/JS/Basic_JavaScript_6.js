function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " this time.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this. Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Dog(Breed, Color, Age, Size) {
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
    this.Dog_Size = Size;
}
var Mike = new Dog("Labrador", "Chocolate", 6, "Large");
var Stacy = new Dog("Mini Pin", "Tan and Black", 2, "Small");
var Auke = new Dog("Husky", "Red and White", 5, "Large");
function theFunction() {
    document.getElementById("New_and_This").innerHTML = "Auke has a " + Auke.Dog_Breed + " it has " + Auke.Dog_Color + " fur and it is " + Auke.Dog_Age + " years old. It's a " + Auke.Dog_Size + " dog.";
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}