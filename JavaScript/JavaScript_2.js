function validateForm() {
    var f = document.forms["myForm"]["fname"].value;
    if (f == "") {
      alert("First ame must be filled out");
      return false;
    }
    var l = document.forms["myForm"]["lname"].value;
    if (l == "") {
      alert("Last name must be filled out");
      return false;
    }
    var e = document.forms["myForm"]["email"].value;
    if (e == "") {
      alert("Email must be filled out");
      return false;
    }
    var p = document.forms["myForm"]["phone"].value;
    if (p == "") {
      alert("Phone number must be filled out");
      return false;
    }
  }