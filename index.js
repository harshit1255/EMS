console.log('harshit');
//portal
/*
add new employee
can see all the employee
can remove employee
can edit the details of an employee
*/ 

const form =document.querySelector("#form-elem");

const onsubmitform=(e)=>
{   
    e.preventDefault();
    console.log('hello');
    const employee=
    {
       name : e.target.name.value,
        employeeId :e.target.employeeId.value,
        salary :e.target.salary.value,
        team:e.target.team.value,
        role:e.target.role.value,
        company:e.target.company.value
    }
    addemployee(employee);
}
form.addEventListener('submit',onsubmitform);

function addemployee(employee)
{
    let tr =document.createElement('tr');
    console.log(tr);
    let td =document.createElement('td');
    td.innerHTML=employee.name;
    tr.appendChild(td);
    console.log(td);
}