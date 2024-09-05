import { Carro } from "./classes/Carro.js";
import { Motocicleta } from "./classes/Motocicleta.js";


const car = new Carro('Fiat', '1234AA', 'Gasolina', 2024, 'Azul', 4, 'Auto');

console.log(car.info());

const moto = new Motocicleta('Honda', '123DD', 'Gasolina', 2020, 'Veremelho', 100, 'Scooter');
console.log(moto.info());