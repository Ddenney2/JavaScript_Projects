function my_Dictionary() {
    var Animal = {
        Species: "Horse",
        Color: "Black",
        Breed: "Friesian",
        Height: "16 hands"
    };
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}