/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here
console.log(area/2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if(money >=25000){
    console.log("Laptop");
}
else if(money >=10000 && money<25000){
    console.log("Cycle");
}
else{
    console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 4 ;
//write your code here
for( var i=1; i<= lastDay; i++){
    if(i%3===0){
        console.log(i + " - medicine");
    }
    else{
        console.log(i + " - rest");
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "exp.mp4";
//write your code here
if(fileName.startsWith('#') || fileName.toLowerCase().endsWith('pdf') || fileName.toLowerCase().endsWith('docx')){
    console.log("Store");
}
else{
    console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhanku" , roll: 1014 ,department: "cse" };
//write your code here
console.log(student.name + student.roll + "." +student.department + "@ph.ac.bd");