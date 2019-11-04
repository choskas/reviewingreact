const person = {
    name: 'Andrw',
    age: 32,
    location: {
       city: 'caca',
       temp: 80000 
    }
}

//default value
const {name = 'Anonymous', age} = person

console.log(`${name}, ${age}`)

//rename variable
const {city, temp: temperature} = person.location

console.log(`${city}, la temperatura ptos ${temperature}`)


//ARRAY DESTRUCTURING

const address = ['lacalle', 'cdmx', 'pais']
const [street, ciudad, state = 'New YOrk'] = address
//si solo se quieren algunos valores
//const [, , state] = address

console.log(`you are in ${street}, ${ciudad}`)