const person = {
    name: 'Andrw',
    age: 32,
    location: {
       city: 'caca',
       temp: 80000 
    }
}

const {name, age} = person

console.log(`${name}, ${age}`)

const {city, temp: temperature} = person.location

console.log(`${city}, la temperatura ptos ${temperature}`)