import {
  addNewTaco,
  deleteTaco,
  getAllTacos,
  getTacoById,
  updateTaco
} from "./crud";

console.log("Todos los tacos");
console.log(getAllTacos());

console.log("El Taco #1");
console.log(getTacoById(1));

const tripaTaco = { name: "Tripa", price: 20 };
addNewTaco(tripaTaco);
console.log("Agregando taco de tripa");
console.log(getAllTacos());

const bisteckTaco = { id: 1, name: "Pastor con piña" };
updateTaco(bisteckTaco);
console.log("Actualizando el nombre del taco de pastor");
console.log(getAllTacos());

deleteTaco(4);
console.log("Borrando taco de tripa");
console.log(getAllTacos());
