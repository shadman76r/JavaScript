/** Problem 04 - (Delete / Store) */
var fileName= "exp.mp4";
//write your code here
if(fileName.startsWith('#') || fileName.toLowerCase().endsWith('pdf') || fileName.toLowerCase().endsWith('docx')){
    console.log("Store");
}
else{
    console.log("Delete");
}