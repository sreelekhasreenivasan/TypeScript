

function add(a:number,b:number){
    return a+b
}
console.log(add(3,5));

const sub=(x:number,y:number)=>{
  return x-y
}
console.log(sub(5,1));


//any type
let card:any [] = ['hello',1,false]
card.push(true)

function sum(p:any,q:any){
  return p+q
}
console.log(sum('hello',1));


//tuples-array of any type
let array:[string,number]
array=['hello',10]

