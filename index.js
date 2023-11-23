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
// let span_button =null;
function addemployee(employee)
{
    let tr =document.createElement('tr');
    console.log(tr);
    let td =document.createElement('td');
    td.innerHTML=employee.name;
    tr.appendChild(td);
    td =document.createElement('td');
    td.innerHTML=employee.employeeId;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML=employee.salary;
    tr.appendChild(td);
    td =document.createElement('td');
    td.innerHTML=employee.team;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerHTML=employee.role;
    tr.appendChild(td);
    td=document.createElement('td');
    let span = document.createElement('span');
    span.className = 'material-icons';
    // span_button=span;
    span.innerHTML='delete';
    td.appendChild(span);
    span = document.createElement('span');
    span.className = 'material-icons';
    span.innerHTML='edit';
    td.appendChild(span);
    tr.appendChild(td);
    
    document.getElementById('table-body').appendChild(tr);
    console.log(tr);
}

document.querySelector('#table-body').addEventListener('click',(e)=>
{
    console.log('hello')
    console.log(e.currentTarget);
    console.log(e.target);
    if(e.target.innerHTML==='delete')
        
            console.log('delete pressed')
        }
)

///***imp elem.classList.toggle('abc') abc will be aaded if present in present class list of elem or addded if not present */