function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "got this ";
    var part_3 = "thing to ";
    var part_4 = "work!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a successful boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
