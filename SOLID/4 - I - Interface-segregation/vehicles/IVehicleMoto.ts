import IVehicle from "./IVehicle";

export default interface IVehicleMoto extends IVehicle {
  configurationMotorcycle(color: string, year: number, engine: number): void;
}
