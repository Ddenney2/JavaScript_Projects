function validateForm() {
    var x = document.forms["theForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }