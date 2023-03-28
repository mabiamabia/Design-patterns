import Car from "./Car";
import Transport from "./Transport";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car();
  }
}
