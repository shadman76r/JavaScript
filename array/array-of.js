//array of array
// or we can say 2d array
const number= [1,2,3,45,5];
const runs = [[],[],[]];
const exam_mark = [
    [98,87,55,65,87,69],
    [99,56,89,78,35,36],
    [88,55,88,66,88,99]
]

console.log(number[0]);
console.log(exam_mark[0]);
// one type
console.log(exam_mark[0][0])
// another types
const first_class_first = exam_mark[0];
console.log(first_class_first[0]);
exam_mark[0][1]=90
exam_mark[1].pop()
exam_mark[1].push(44);
console.log(exam_mark);
// loop

for(const marks of exam_mark){
    console.log(marks)
}