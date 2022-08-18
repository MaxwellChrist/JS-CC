///////////////////////////////////Problem 1 - Function Component//////////////////////////////////////////////////////
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
console.log(test1.getAvailability())
console.log(test2.getAvailability())
console.log(test3.getAvailability())
test2.sell()
test3.sell(2)
console.log(test2)
console.log(test3)
test2.restock()
test3.restock(100)
console.log(test2)
console.log(test3)
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
console.log(test4.getAvailability())
console.log(test5.getAvailability())
console.log(test6.getAvailability())
test5.sell()
test6.sell(4)
console.log(test5)
console.log(test6)
test5.restock()
test6.restock(14)
console.log(test5)
console.log(test6)
///////////////////////////////////Problem 2//////////////////////////////////////////////////////