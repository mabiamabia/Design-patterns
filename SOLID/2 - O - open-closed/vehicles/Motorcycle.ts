import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    console.log("ligando os motores");
  }
  configure(color: string, year: number, engine: number): void {
    console.log(`criando uma moto: ${color},${year},${engine}`);
    this.startVehicle();
  }
}
