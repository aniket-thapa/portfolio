// Form Submission //

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var form = event.target;
    var formData = new FormData(form);

    fetch("https://formspree.io/f/xbjnnzlj", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => {
        var responseDiv = document.getElementById("response");
        if (response.ok) {
          responseDiv.innerHTML =
            '<p class="success">Message successfully sent!</p>';
          form.reset();
        } else {
          responseDiv.innerHTML =
            '<p class="error">Failed to send message. Please try again later.</p>';
        }
      })
      .catch((error) => {
        var responseDiv = document.getElementById("response");
        responseDiv.innerHTML =
          '<p class="error">An error occurred. Please try again later.</p>';
      });
  });

// Form Validation //

function validateForm() {
  var email = document.getElementById("email").value;

  if (email == "") {
    var emailError = document.getElementById("emailError");
    emailError.innerText = "** Email cannot be empty. **";
    emailError.style.fontSize = "16px";
    emailError.style.fontWeight = "200";
    emailError.style.color = "red";
    return false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email.match(emailPattern)) {
    var emailError = document.getElementById("emailError");
    emailError.innerText = "** Please enter a valid email address. **";
    emailError.style.fontSize = "16px";
    emailError.style.fontWeight = "200";
    emailError.style.color = "red";
    return false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  return true;
}
