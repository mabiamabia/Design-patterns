import CarTransport from "../criacional/Factory/transport/CarTransport";
import MotorcycleTransport from "../criacional/Factory/transport/MotorcycleTransport";
import Transport from "../criacional/Factory/transport/Transport";
import BikeTransport from "./Factory/transport/BikeTransport";

declare var process;

let transport: Transport;

if (process.argv.includes("--uber")) {
  transport = new CarTransport();
} else if (process.argv.includes("--log")) {
  transport = new MotorcycleTransport();
} else if (process.argv.includes("--eats")) {
  transport = new BikeTransport();
} else {
  console.error("Selecione o tipo de entrega");
}

if (transport) {
  transport.startTransport();
}
