class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getGreeting(){
        return `Hi. I'm ${this.name}`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation

    }

    getGreeting(){
        let greeting = super.getGreeting()

        if(this.homeLocation){
            greeting += ` I'm visition from ${this.homeLocation}.`
        }

        return greeting
    }

}


const yo = new Traveler('mijo', 22)

console.log(yo.getGreeting())