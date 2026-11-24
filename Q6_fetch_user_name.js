// Q6: Fetch user details and display the user's name
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(user => {
    console.log("Name:", user.name);
  });
