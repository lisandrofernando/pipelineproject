let myArray = [12,3,8,22,9,6]

let min=myArray[0]
let max = myArray[0]
for (let i=0; i<myArray.length; i++){
    console.log(myArray[i])
    if(myArray[i]>max){
        max = myArray[i]
    }else if(myArray[i]<min){ 
        min = myArray[i]
    }
}
console.log(`The max number is` + max)
console.log(`The max number is` + min)