const employees = [
    {
        id:101,
        name: 'John',
        age: 30,
    },
    {
        id:102,
        name: 'Raj',
        age: 25,
    },
    {
        id:103,
        name: 'David',
        age: 35,
    }
]


const findSingleEmployee = (id) => {

    return employees.find((emp)=>emp.id === id)
}
const getAllEmployees = () => {
    return employees
}
module.exports = {
    findSingleEmployee,getAllEmployees
}