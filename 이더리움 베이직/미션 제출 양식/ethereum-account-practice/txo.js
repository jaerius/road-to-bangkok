class TXO {
    constructor(owner, amount){
        this.owner = owner
        this.amount = amount
        this.spent = false
    }

    spend() {
        if(this.spent){
            throw new Error("this txo is already spent")
        }
        this.spent = true
    }

}

const txoB = new TXO('B',10)
console.log(txoB)

txoB.spend()
console.log(txoB)

const txoC = new TXO('C', 10)
console.log(txoC)

try{
    txoB.spend()
} catch (error){
    console.error(error.message)
}