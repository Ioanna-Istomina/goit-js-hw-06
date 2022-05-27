const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const user = {
    [email.name]: email.value.trim(),
    [password.name]: password.value.trim(),
  };

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(user);
    event.currentTarget.reset();
  }
}
