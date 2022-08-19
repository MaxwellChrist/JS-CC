///////////////////////////////////Problem 1 Available Books - Function Component//////////////////////////////////////////////////////
function P1BookStore(title, author, ISBN, numCopies) {
    this.title = title
    this.author = author
    this.ISBN = ISBN
    this.numCopies = numCopies
}

P1BookStore.prototype.getAvailability = function() {
    if(this.numCopies === 0) {
        return "out of stock"
    } else if (this.numCopies < 10) {
        return "low stock"
    } else {
        return "in stock"
    }
}
P1BookStore.prototype.sell = function(numSold = 1) {
    return this.numCopies -= numSold
}
P1BookStore.prototype.restock = function(numStocked = 5) {
    return this.numCopies += numStocked
}
let test1 = new P1BookStore('The God Delusion', 'Richard Dawkins', 1, 0)
let test2 = new P1BookStore('On the origin of species', 'Charles Darwin', 2, 2)
let test3 = new P1BookStore('Food of the Gods', 'Terance Mckenna', 3, 22)
// console.log(test1.getAvailability())
// console.log(test2.getAvailability())
// console.log(test3.getAvailability())
// test2.sell()
// test3.sell(2)
// console.log(test2)
// console.log(test3)
// test2.restock()
// test3.restock(100)
// console.log(test2)
// console.log(test3)

///////////////////////////////////Problem 1 - Class Component//////////////////////////////////////////////////////
class P1BookStore2 {
    constructor(title, author, ISBN, numCopies) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this.numCopies = numCopies
        this.getAvailability = function() {
            if(this.numCopies === 0) {
                return "out of stock"
            } else if (this.numCopies < 10) {
                return "low stock"
            } else {
                return "in stock"
            }
        }
    }
    get availability() {
        return this.getAvailability()
    }
    sell(numSold = 1) {
        this.numCopies -= numSold
    }
    restock(numStocked = 5) {
        this.numCopies += numStocked
    }
}

let test4 = new P1BookStore2('Cat in the Hat', 'Dr. Seuss', 4, 0)
let test5 = new P1BookStore2('Where the Wild Things are', 'Maurice Sendak', 5, 5)
let test6 = new P1BookStore2('The Giving Tree', 'Shel Silverstein', 6, 15)
// console.log(test4.getAvailability())
// console.log(test5.getAvailability())
// console.log(test6.getAvailability())
// test5.sell()
// test6.sell(4)
// console.log(test5)
// console.log(test6)
// test5.restock()
// test6.restock(14)
// console.log(test5)
// console.log(test6)

///////////////////////////////////Problem 2 Movie Object - functional component //////////////////////////////////////////////////////
function Movie1(title, director, genre, releaseYear, rating) {
    this.title = title
    this.director = director
    this.genre = genre
    this.releaseYear = releaseYear
    this.rating = rating
}
Movie1.prototype.getOverview = function() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was release in ${this.releaseYear}. It received a rating of ${this.rating}.`
}
let testMovie1 = new Movie1("Lord of the Rings: The Fellowship of the ring", "Peter Jackson", "Sci-fi", 2001, 8.8)
// console.log(testMovie1.getOverview())

///////////////////////////////////Problem 2 Movie Object - class component //////////////////////////////////////////////////////
class Movie2{
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title
        this.director = director
        this.genre = genre
        this.releaseYear = releaseYear
        this.rating = rating
    }
    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was release in ${this.releaseYear}. It received a rating of ${this.rating}.`
    }
}
let testMovie2 = new Movie2("Lord of the Rings: The Two Towers", "Peter Jackson", "Sci-fi", 2002, 8.8)
// console.log(testMovie2.getOverview())

///////////////////////////////////Problem 3 Vegetarian Dinner //////////////////////////////////////////////////////
// let menu = document.getElementById("menu")
// const dishes = [
//     {
//         name: "Eggplant Parmesan",
//         vegetarian: true
//     },
//     {
//         name: "Spaghetti & Meatballs",
//         vegetarian: false
//     },
//     {
//         name: "Pepperoni Calzone",
//         vegetarian: false
//     },
//     {
//         name: "Caprese Chicken",
//         vegetarian: false
//     },
//     {
//         name: "Mushroom Risotto",
//         vegetarian: true
//     },
// ]
// let veggyFilter = dishes.filter(item => item.vegetarian)
// veggyFilter.forEach(item => {
//     let dish = document.createElement('li')
//     dish.textContent = item.name
//     menu.appendChild(dish)
// })

///////////////////////////////////Problem 4 Technical book class //////////////////////////////////////////////////////
class P4BookStore extends P1BookStore2 {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies)
        this.edition = edition
    }
    getEdition() {
        return `The current version of the book is ${this.edition}`
    }
    
}
let testBook = new P4BookStore("Flowers for Algernon", "Daniel Keyes", 44, 29, "3rd")
// console.log(testBook.availability)
// console.log(testBook.getEdition())

///////////////////////////////////Problem 5 private object //////////////////////////////////////////////////////
let username = Symbol('username')
let password = Symbol('password')

let user = {
    [username]: "Max",
    [password]: "12345",
    age: 31,
}
// console.log(user.username, user.password)

//////////////////////////////Problem 6 Ticking Time - using setInterval (easiest way) ////////////////////////////////////////////
// let clock = document.getElementById("clock")
// let clockWork = () => {
//     return setInterval(() => {
//         let date = new Date()
//         clock.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     }, 1000)
// }
// clockWork()

/////////////Problem 6 Ticking Time - using setTimeout (little harder since it's meant to be only called once) //////////////////////
// let clock = document.getElementById("clock")
// let clockWork = () => {
//     return setTimeout(() => {
//         let date = new Date()
//         clock.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//         clockWork()
//     }, 1000)
// }
// clockWork()

///////////////////////////////////Problem 7 Classroom attendance //////////////////////////////////////////////////////
function getStudents(data) {
    let {hasTeachingAssistant, classroom} = data
    let [teacher, teachingAssistant] = classroom
    if (!hasTeachingAssistant) {
        teachingAssistant = null
    }
    return console.log(classroom.filter(item => item !== teacher && item !== teachingAssistant))
}

// getStudents({
//     hasTeachingAssistant: true,
//     classroom:  ["Mike", "Michelle", "Anthony", "Jessica"]
// })
// getStudents({
//     hasTeachingAssistant: false, 
//     classroom: ["Emily", "David", "Sam", "Tony"]
// })

///////////////////////////////////Problem 8 Dynamic colors //////////////////////////////////////////////////////
// let button = document.getElementById("buttonColorMixerUpper")
// let makeColor = color => {
//     document.body.style.background = color
// }
// let buttonColorChanger = (() => {
//     return button.addEventListener("click", () => {
//         if (document.body.style.background === "blue") {
//             makeColor("green")
//         } else if (document.body.style.background === "green") {
//             makeColor("pink")
//         } else if (document.body.style.background === "pink" || document.body.style.background === "") {
//             makeColor("blue")
//         }
//     })
// })()
///////////////////////////////////Problem 9 Coffee Calculations //////////////////////////////////////////////////////
let coffeeCalc = (data) => {
    let coffeePrice = 1.25
    let total = data.reduce((acc, curr) => acc + curr) * coffeePrice
    return console.log(`The total bill is ${total}`)
}
// coffeeCalc([1, 5, 7, 3, 5])

///////////////////////////////////Problem 10 Food Truck //////////////////////////////////////////////////////

// let masterMenu = (menu) => {
//     let oneMenu = menu.flat()
//     let trimmedMenu = new Set()
//     oneMenu.forEach(item => {
//         trimmedMenu.add(item)
//     })


//     let foodTruckMenu = document.getElementById("combined-menu")
//     for (let item of trimmedMenu) {
//         let foodItem = document.createElement('li')
//         foodItem.textContent = item
//         foodTruckMenu.appendChild(foodItem)
//     }
// }

// masterMenu([["pizza", "pasta"], ["pizza", "calzones", "mozzarella sticks"], ["lobster", "crab", "gumbo"],["pasta", "salad"]])
// masterMenu([["tacos", "burgers"], ["pizza"], ["burgers"],["tacos", "pizza"]])

///////////////////////////////////Problem 11 Train Generator //////////////////////////////////////////////////////
// let trainBtn = document.getElementById("train-stops")
// function* moveTrainGen(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         yield arr[i]
//     }
//     trainBtn.setAttribute("disabled", true)
//     return "End of the line!"
// }

// const moveTrain = moveTrainGen(["Poughkeepsie", "Newburgh", "Peekskill", "Yonkers", "Bronx", "Grand Central"])

// trainBtn.addEventListener("click", () => {
//     console.log(moveTrain.next().value)
// })

///////////////////////////Problem 12 string permutation - regular function/////////////////////////////////////////////
const scrabble = (letters) => {
    let total
    for (let i = 1; i <= letters.length; i++) {
        if (total === undefined) {
            total = i
            continue
        }
        total *= i
    }
    return console.log(total)
}

scrabble('abcde')

///////////////////////////Problem 12 string permutation - recursive function/////////////////////////////////////////////
const scrabble2 = (letters) => {
    if (letters.length === 1) {
        return 1
    } else {
        return letters.length * scrabble2(letters.slice(1))
    }
}

console.log(scrabble2('monkey'))