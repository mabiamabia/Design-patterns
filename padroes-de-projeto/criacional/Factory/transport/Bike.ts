import IVehicle from "./vehicles/interfaces/IVehicle";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega");
  }
  getCargo(): void {
    console.log("Sua entrega esta chegando com uber eats");
  }
}
