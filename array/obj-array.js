const players = [1,2,43,54,4];
const numbers = [{},{},{}];
const employes = [
    {name: "sakib", designation: 'content writter', salary: 20000},
    {name: "rakin", designation: 'content writter', salary: 20000},
    {name: "saki", designation: 'content writter', salary: 20000},
    {name: "alam", designation: 'content writter', salary: 20000}

]

console.log(employes);
console.log(employes[1]);
console.log( 'salary is: '+ employes[1].salary);

//for loop

for (const employeee of employes ){
    console.log(employeee.name, employeee.designation);
}
//for loop new we can use it like that
for (const emp of employes){
    const person = emp;
    const personinfo= person.name+' '+person.salary;
    console.log(personinfo);
}