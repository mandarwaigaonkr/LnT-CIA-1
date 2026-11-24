// Q3: Convert JSON string into a JavaScript object using JSON.parse()
let student = '{"name":"Ravi","age":24}';

let obj = JSON.parse(student);
console.log("Student Name:", obj.name);
