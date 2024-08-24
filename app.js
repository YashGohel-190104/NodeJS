// @ts-ignore
const fs = require("fs")

console.log("Hello World....!")

// const user = require("./user")
// console.log(user);
// const age = require("./user")
// console.log(age);

const user = require("./user")
// console.log(user)
// user.displayUserData(108)


const employee = require("./employee")
var emps = employee.getAllEmployees()
console.log(emps)
var semp = employee.findSingleEmployee(102)
console.log(semp)

fs.writeFileSync("employee.json",JSON.stringify(emps))
