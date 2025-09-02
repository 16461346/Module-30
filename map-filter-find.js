const students=[
    {id:1 , name:'rony', roll:709660, mark:55},
    {id:2 , name:'ronyx', roll:709260, mark:48},
    {id:3 , name:'ronyxx', roll:709640, mark:75},
    {id:4 , name:'ronyxxx', roll:704160, mark:46}
]

const name=students.map(student=> student.name)
console.log(name);
const roll=students.map(student=> student.roll)
console.log(roll)
const mar=students.filter(student=> student.mark > 50)
console.log(mar)