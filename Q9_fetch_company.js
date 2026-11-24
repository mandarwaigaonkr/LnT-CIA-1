// Q9: Fetch user details and display company name and website
fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(response => response.json())
  .then(user => {
    console.log("Company Name:", user.company.name);
    console.log("Website:", user.website);
  });
