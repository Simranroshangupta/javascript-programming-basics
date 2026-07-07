// JsonParse.js

const jsonData = '{"name":"Simran","age":20,"course":"AIML"}';

const student = JSON.parse(jsonData);

console.log(student);

console.log(student.name);

console.log(student.age);

console.log(student.course);