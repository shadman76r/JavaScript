/** Problem 04 - (Delete / Store) */
var fileName= "docx.xpdf";
//write your code here
if(fileName.startsWith('#') || fileName.toLowerCase().endsWith('pdf') || fileName.toLowerCase().endsWith('docx')){
    console.log("Store");
}
else{
    console.log("Delete");
}