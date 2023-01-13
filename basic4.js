

let array = [3,8,1,12,20,9,5]


let searchAlg = (array, target)=>{
    for(let i=0; i<array.length; i++){
        if(array[i]==target){
            return i
        }
    }
    return -1
    
}
console.log(searchAlg(array, 5))

  let sortedArr = array.sort((a,b)=>a-b)
  console.log(sortedArr)
