const add = function () => {
    return arguments[0] + arguments[1]
}
console.logadd((11, 22, 33, 44))

const car = {
    color: 'red',
    getSummary: function => {
        return 'the car is {this.color}'
    }
}
console.log(car.getSummary())