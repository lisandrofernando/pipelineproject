

function pyramid(b){
    const midPoint = Math.floor((b * 2 -1)/2)
    for(let i=0; i<b; i++){
        let level= ''
        for(let j=0; j<i; j++){
            if(midPoint - i <= j && midPoint + i >=j){
                level += '*'
            }else{
                level += '-'
            }
        }
        console.log(level)
    }
}
pyramid(10)