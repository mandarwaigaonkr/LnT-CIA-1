// Q10: Fetch user details with error handling using .catch()
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    return response.json();
  })
  .then(user => {
    console.log("Name:", user.name);
    console.log("Email:", user.email);
  })
  .catch(error => {
    console.error("Error fetching user details:", error.message);
  });
