
let a = [24, 8, 5, 16,9]

let sum = 0

for(let i=0; i<a.length; i++){
    sum = a[i] + sum
}
console.log(`This is the sum:`+ sum)


let b = 0

while(b<10){
    b++
}
console.log(`I'm bb`+ b)

/*
* The reduce method will iterate through the array just like for loop
*/

  let Total = a.reduce((sum,numbers)=>sum+numbers,0)
  console.log(Total)

  let scores = [2,10,13,14,17,20]
  let values =[]

  for(let i=0; i<scores.length; i++){

      if(scores[i]%2==0){
          values.push(scores[i])
      }
  }
  console.log(values)
/*
* The filter method will do exact the same as the for loop above
*
*/
  let TotalScore = scores.filter((score)=>score%2==0)
  console.log(TotalScore)
//Map method 
  let mappedVal = TotalScore.map(score=>score*3)
  console.log(mappedVal)

let ultimateVal = mappedVal.reduce((sum, values)=>sum+values,0)
console.log(ultimateVal)
//In one line all the above was done
let sumOfValues = scores.filter((score)=>score%2==0).map(score=>score*3).reduce((sum, values)=>sum+values,0)
console.log(sumOfValues)

//Sorting arrays in JS
//In strings sorting method works effectively

let fruits = ["Strawberries","Blueberries", "Banana", "Apples"]
fruits.sort()
console.log(fruits)

let digits = [12,001,11,23,20,17]

digits.sort(function(a,b){
    return a-b
})
digits.sort((a,b)=>a-b)
console.log(digits)

let day = 'Monday'
let subdAY = day.slice(0,4)
console.log(subdAY)
console.log(day[1])
let splitDay = day.split("n")
console.log(splitDay)
day.indexOf("day")

let date = '24'

let nextDate = '28'

let diff = parseInt(nextDate) - parseInt(date)
diff.toString()
console.log(`Here the diif` + diff)

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 26,
    fullName: function() {
        console.log(this.firstName+this.lastName)
    }
}

person.firstName
person.gender = 'male'
console.log(person)
delete person.lastName
console.log('gender' in person)

//To itarate through the object
for(let key in person){
   console.log(person[key])
}