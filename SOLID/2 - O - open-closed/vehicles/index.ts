import Car from "./Car";
import Motorcycle from "./Motorcycle";
import TypeVehicle from "./TypeVehicle";

const type = TypeVehicle.CAR;
let vehicle: Car | Motorcycle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("verde", 2022, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Vermelho", 2022, 2.0);
}
