// Q8: Fetch all users and display each user's name using forEach()
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(user.name);
    });
  });
