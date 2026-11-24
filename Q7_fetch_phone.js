// Q7: Fetch user details and display the user's phone number
fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(response => response.json())
  .then(user => {
    console.log("Phone:", user.phone);
  });
