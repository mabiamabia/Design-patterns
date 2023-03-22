
import IVehicleCar from './IVehicleCar'

export default class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.table("Ligar carro");
  }
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.table(`criando um carro: ${color},${year},${engine},${seats}`);
    this.startVehicle();
  }
}
