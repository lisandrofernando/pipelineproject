

let b = [1,2,3,4,5]

let c = [...b, 6,7,8]

console.log(c)

let human = {
    firstName: 'Dario',
    lastName: 'Camilo',
    age: 12
}

newHuman = {
    ...human,
    height: 89.9
}

//console.log(person)

  //console.log(person.name)

// for(let key in person){
//     console.log(person[key])
// }

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 26,
// }

for(let key in human){
    console.log(human[key])
}

for(let key in newHuman){
    console.log(newHuman[key])
}

function data(){
}
console.log(data)

let myFunc = ()=>{
    console.log('Inside function')
}

let printName = (fistName, age)=>{
           console.log(fistName, age)
}

printName('Max', 41)

