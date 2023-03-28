import Transport from "./Transport";
import IVehicle from "./vehicles/interfaces/IVehicle";
import Motorcycle from "./Motorcycle";

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}
