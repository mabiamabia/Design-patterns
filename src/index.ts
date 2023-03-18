import Car from "../SOLID/2 - O - open-closed/vehicles/Car";
import Motorcycle from "../SOLID/2 - O - open-closed/vehicles/Motorcycle";
import TypeVehicle from "../SOLID/2 - O - open-closed/vehicles/TypeVehicle";

const type = TypeVehicle.CAR;
let vehicle: Car | Motorcycle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Preto", 2022, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("Vermelho", 2022, 2.0);
}
