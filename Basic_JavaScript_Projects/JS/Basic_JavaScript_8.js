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

function mySearch() {
    var str = "I've got a lovely bunch of coconuts."
    var A = str.search("lovely");
    document.getElementById("bunch").innerHTML = A;
  }

function string_Method() {
    var B = 46;
    document.getElementById("Numbers").innerHTML = B.toString();
}

function precision_Method() {
    var G = 1536.65235529872563;
    document.getElementById("Precision").innerHTML = G.toPrecision(10);
}

function myFunction() {
    var num = 9.4525752;
    var n = num.toFixed(3);
    document.getElementById("Fix").innerHTML = n;
}

function value_Function() {
    var str = "So far so good";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}

function upper_Function() {
    var str = "Now I got it working.";
    var res = str.toUpperCase();
    document.getElementById("Up").innerHTML = res;
  }
