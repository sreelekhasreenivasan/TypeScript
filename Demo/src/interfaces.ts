//it shows the properties and type an object must have
interface Person{
    name:String,
    age:number,
    isIll:boolean
}

const person1:Person={
    name:'Dinsha',
    age:23,
    isIll:true
}

interface book{
    title:String,
    des:String,
    date:Date,
    author:Person
}

const book1:book={
    title:'title',
    des:'description',
    date:new Date(),
    author:person1
}
console.log(book1);


