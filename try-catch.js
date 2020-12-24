const getTip = (amount) => {
    if(typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('it is a number')
    }
}

try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('it is a happy')
}