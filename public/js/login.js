const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("hi")

  const user_name = document.querySelector('#name-signup').value.trim();
  const user_email = document.querySelector('#email-signup').value.trim();
  const user_password = document.querySelector('#password-signup').value.trim();

  if (user_name && user_email && user_password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_name, user_email, user_password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);