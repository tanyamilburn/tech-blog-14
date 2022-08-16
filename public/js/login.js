/** handles post request for logging in */
const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log('login success!');
  
        document.location.reload("/");
      } else {
        alert("Failed to log in.");
      };
    };
  };
  
  document
    .querySelector(".form")
    .addEventListener("submit", loginFormHandler);