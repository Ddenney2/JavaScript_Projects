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

/* This is where the code stops working. Getting this method to work is 
getting confusing. I've tried many variations, but it is saying the class is not defined.
Also corrupts the existing, working, functions above. */

public class MyClass {
    public static void main(String[] args) {
        String txt = "Cookie eating monkeys.";
        System.out.println(txt.toUpperCase());
    
    }
  }
