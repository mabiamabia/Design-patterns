import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankCard implements IPaymentInstrument {

    validate(): void {
       console.log("Validação basica");
       
    }
    collectPayment(): void {
        console.log("Pagamento realizado");
        
    }

}