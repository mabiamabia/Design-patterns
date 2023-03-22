import DebitCard from "../SOLID/3 - L - Liskov-substitution-principle/DebitCard"

//const card = new CreditCard()
const card = new DebitCard()

card.validate()
card.collectPayment()