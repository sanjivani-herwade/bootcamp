const notes = [{
    title: 'sanju herwade',
    body: 'i like mango'
}, {
    
    title: 'sangita herwade',
    body: 'i am singer'
}, {

    title: 'sangita herwade',
    bode: 'i am sad'
}]

const filters = {
    searchText: ''
}

//const user = {
// name: 'Andrew',
// age: 23
//}
//const userJSON = JSON.stringify(user)
//console.log(userJSON)
//localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log{'${user.name'} is ${$user.age}'}

}}