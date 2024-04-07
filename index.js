// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    if (!employee) {
        throw new Error('Employee object is not defined');
    }
    const updatedEmployee = Object.assign({}, employee);
    updatedEmployee[key] = value;

    return updatedEmployee;
}


const employee = {
    name: 'John',
    age: 30,
    department: 'HR'
};

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'salary', 50000);

console.log(updatedEmployee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    if (!employee) {
        throw new Error('Employee object is not defined');
    }
    employee[key] = value;

    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    if (!employee) {
        throw new Error('Employee object is not defined');
    }
    const updatedEmployee = Object.assign({}, employee);

    if (updatedEmployee.hasOwnProperty(key)) {
        delete updatedEmployee[key];
    }

    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    if (!employee) {
        throw new Error('Employee object is not defined');
    }

    if (employee.hasOwnProperty(key)) {
        
        delete employee[key];
    }
    return employee;
}







