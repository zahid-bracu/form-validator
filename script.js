var objects = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  var form = document.getElementById("myform");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirmPassword");
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("hi");
    var count = 0;
    if (!firstName.value.trim()) {
      document.getElementById("fnameErr").style.display = "block";
    } else {
      document.getElementById("fnameErr").style.display = "none";
      firstName.value = firstName.value.trim();
      objects.fname = firstName.value;
      count++;
    }

    if (!lastName.value.trim()) {
      console.log("empty");
      document.getElementById("lnameErr").style.display = "block";
    } else {
      document.getElementById("lnameErr").style.display = "none";
      lastName.value = lastName.value.trim();
      objects.lname = lastName.value;
      count++;
    }

    email.value = email.value.trim();
    if (!email.value) {
      document.getElementById("mailErr").style.display = "block";
    } else if (!re.test(email.value)) {
      document.getElementById("mailErr").style.display = "block";
      email.value = "";
    } else if (email.value) {
      document.getElementById("mailErr").style.display = "none";
      console.log(email.value);
      objects.email = email.value;
      count++;
    }

    if (password.value.length < 6) {
      document.getElementById("lengthErr").style.display = "block";
    } else {
      document.getElementById("lengthErr").style.display = "none";
      if (password.value === confirmPassword.value) {
        document.getElementById("matchErr").style.display = "none";
        document.getElementById("matched").style.display = "block";
        objects.password = password.value;
        count++;
      } else {
        document.getElementById("matchErr").style.display = "block";
      }
    }

    console.log(count);
    if (count == 4) {
      document.getElementById("validForm").style.display = "none";
      document.getElementById("success").style.display = "block";
      button.style.display = "none";
      document.getElementById("show").style.display = "block";
       
    }

    var fullName = `${objects.fname} ${objects.lname}`;
    console.log(fullName);
    document.getElementById("name").innerText = fullName;
    document.getElementById("mailShow").innerText = objects.email;
  });