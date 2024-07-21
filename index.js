
function writeCards(names, eventName){
    let newArray = []

    for(let i = 0; i < names.length; i++){ 
    
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    
}
   return newArray
}

let names = ["Charlie", "Samip", "Ali"]
// let eventName = 'birthday'
console.log(writeCards(names,"birthday"))



function countDown(num) {
    let init = 10;
    while(init >= 0) {
        console.log(init--)
    }
    return num;
}