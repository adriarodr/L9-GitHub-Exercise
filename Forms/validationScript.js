// JavaScript code for form validation

// Regular expression pattern for alphanumeric input
const REGEX = /^[a-zA-Z0-9]+$/;

let form = document.getElementById("myForm");

// Adds event listener to the form that submits an event
form.addEventListener("submit", function(event) {
  // Retrieve the input field element
  let input = document.getElementById("inputField");

  // Check if the input value matches the pattern
  if (!REGEX.test(input.value)) {
    // Prevent form from submitting
    event.preventDefault();

    // Invalid input: display error message
    alert("Invalid alphanumeric value. Please enter a valid alphanumeric input");
  } else {
    // Valid input: display confirmation and submit the form
    alert("Valid alphanumeric input. Submission confirmed.");
  }
});

