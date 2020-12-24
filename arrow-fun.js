const square = (num) => num * num

    const square = (num) => {
        return num * num
}
console.log(square(5))

const people = ({
    name: 'Andrew',
    age: 2
}, {
    name: 'Mead',
    age: 27

}, {
    name: 'sanju',
    age: 25
})

//const under30 = people.filter(function(person) {
    //return person.age < 30
    //})

 const under30 = people.filter((person) => person.age < 30)
        return person.age < 30

    console.log(under30)

const person = person.find((person) == 25)
    console.log(person.name)