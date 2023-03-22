import DebitCard from '../3 - L - Liskov-substitution-principle/DebitCard'

//const card = new CreditCard()clear

const card = new DebitCard()

card.validate()
card.collectPayment()