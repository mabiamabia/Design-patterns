import IVehicle from "./vehicles/interfaces/IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
this.getCargo()
console.log("Iniciando o trajeto...");
}
  getCargo(): void {
console.log("pegamos os passageiros, estamos prontos");
  }
}
