// const signUpForm = document.querySelector('signup-form');
const signUpBtn = document.getElementById("signupbtn");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.href = "/map";
    } else {
      alert(response.statusText);
    }
  }
};

signUpBtn.addEventListener("click", signupFormHandler);
