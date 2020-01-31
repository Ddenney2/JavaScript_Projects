function myFunction1() {
    var str = "This text is purple!";
    var result = str.fontcolor("purple");
    document.getElementById("text_1").innerHTML = result;
}

function myFunction2() {
    var sentence = "I am learning";
    sentence += " a lot from this book.";
    document.getElementById("Concatenate").innerHTML = sentence;
}