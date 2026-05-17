//object literal
let employee = {
    empName: 'Jo',
    empId: 10,
    hobbies: ['dance', 'music'],
    address: {
        city: 'Goa', state: 'Goa'
    },
    details: function () {
        console.log('hello');
        console.log(empName + " " + empId);
    }
}
console.log(employee);
console.log(employee.empName);
console.log(employee.address.city);

//add new property
employee.mobile = 9892930;
console.log(employee);
employee.greet =()=> console.log('Great day');

console.log()
console.log()
console.log()

for (const prop in employee) {
    let value = employee[prop]

    //check if this is an array - iterat eand print
    if (Array.isArray(value)) {
        console.log(prop);
        value.forEach(ele => console.log(ele))
    } else if (typeof (value) === 'Function') {
        console.log('hh');
        value();
        //check if this is an object - iterat eand print
    } else if (value instanceof (Object)) {
        console.log('.... object...');
        for (const index in value)
            console.log(index, value[index]);
    } else
        console.log(prop + " " + value);
}

//array of employee objects
let employees = [{
    empName: 'Jo',
    empId: 10,
    hobbies: ['dance', 'music'],
    address: {
        city: 'Goa', state: 'Goa'
    },
    details: function () {
        console.log('hello');
        console.log(empName + " " + empId);
    }
}, {
    empName: 'Jo',
    empId: 10,
    hobbies: ['dance', 'music'],
    address: {
        city: 'Goa', state: 'Goa'
    },
    details: function () {
        console.log('hello');
        console.log(empName + " " + empId);
    }
}, {
    empName: 'Jo',
    empId: 10,
    hobbies: ['dance', 'music'],
    address: {
        city: 'Goa', state: 'Goa'
    },
    details: function () {
        console.log('hello');
        console.log(empName + " " + empId);
    }
}]


employees.forEach(emp=>{
    console.log(emp);
    //iterate and print the details of each employee
})