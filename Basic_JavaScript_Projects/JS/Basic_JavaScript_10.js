function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function theFunction() {
    var str = "Dun dun dun";
    var n = str.length;
    document.getElementById("dun").innerHTML = n;
  }

  var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
  var Content = "";
  var Y;
  function for_Loop() {
      for (Y = 0; Y < Instruments.length; Y++) {
          Content += Instruments[Y] + "<br>";
      }
      document.getElementById("List_of_Instruments").innerHTML = Content;
  }

  function cat_pics() {
      var Cat_Picture = [];
      Cat_Picture[0] = "sleeping";
      Cat_Picture[1] = "playing";
      Cat_Picture[2] = "eating";
      Cat_Picture[3] = "purring";
      document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
  }

  function constant_function() {
      const Musical_Instrument = {type: "gutiar", brand:"Fender", color:"black"};
      Musical_Instrument.color = "blue";
      Musical_Instrument.price = "$900";
      document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
  }

  const X = 10;
  A = 2;
  document.write(X);

  var C = 10;
  C = 7;
  document.write(X);

  var B = 24;
  document.write(B);
  {
      let B = 41;
      document.write("<br>" + B);
  }
  document.write("<br>" + B);

  function return_Function() {
    return Math.PI;
}
document.getElementById("Return").innerHTML = return_Function();

  let car = {
      make: "Dodge",
      model: "Viper",
      year: "2021",
      color: "red",
      description : function() {
          return "The car is a " + this.year + this.color + this.make + this.model;
      }
  };
  document.getElementById("Car_Object").innerHTML = car.description();

  var text = "";
  var i;
  for (i = 0; i < 10; i++) {
      if (i === 3) { break; }
      text += "The number is " + i + "<br>";
  }
  document.getElementById("Break").innerHTML = text;

  var text = "";
  var i;
  for (i = 0; i < 10; i++) {
      if (i === 3) { continue; }
      text += "The number is " + i + "<br>";
  }
  document.getElementById("Continue").innerHTML = text;