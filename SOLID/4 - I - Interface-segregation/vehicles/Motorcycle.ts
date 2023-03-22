import IVehicleMoto from "./IVehicleMoto";

export default class Motorcycle implements IVehicleMoto {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine);
  }
  startVehicle(): void {
    console.table("Ligar Moto");
  }
  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.table(`criando uma moto: ${color},${year},${engine},`);
    this.startVehicle();
  }
}
