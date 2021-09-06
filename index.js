// Write your solution in this file!
const employee = {
    "name": "Sam",
    "streetAddress": "11 Broadway",
                    }
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value ;
    return newEmployee ;
}

//employee.name = 'Jen'
//employee.streetAddress = '11 Broadway'

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
       employee[key] = value ;
    return employee ;
}

destructivelyUpdateEmployeeWithKeyAndValue (employee, 'streetAddress', "12 Broadway");

const newEmployee = {...employee};

function deleteFromEmployeeByKey () {
    delete newEmployee.name ;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee

}

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }