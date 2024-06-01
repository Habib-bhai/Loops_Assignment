// Steps to Follow:
// 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.

// 3. Add the lesson to the array: Push each lesson object into the myWork array.
// 4. Print the result: Finally, log the myWork array to the console to see the list of lessons.


let myWork = [] as {name:string, status: boolean}[] //creating an array of objects and each object will have two properties i.e. name & status

//creating a for loop that will iterate 10 times and will create 10 objects.
for(let i=1; i<=10; i++){
    let lesson = {
        name: `lesson ${i}`, // giving lesson number dynamically using string interpolation 
        status: i % 2 === 0 ? true : false // this line is a conditional check using ternary operator"?" basically the line means that divide "i" which is our iteration counter in loop, by two if it is completely divisible then it is an even number if it is even give Status property value "True " otherwise "fasle" if the number is odd
    }

    myWork.push(lesson)
}

console.log(myWork);
