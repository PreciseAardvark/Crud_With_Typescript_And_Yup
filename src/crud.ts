import tacos from "./tacos.json";
import type { NewTaco, UpdateTaco } from "./types";
//mover dependecias de desarrollo a dev.
export const getAllTacos = () => {
  return tacos;
};

export const getTacoById = (id: number) => {
  let getTaco = tacos.find((getTaco) => getTaco.id === id);
  return getTaco;
};

export const addNewTaco = (newTaco: NewTaco) => {
  let lastId = tacos.length + 1;
  let createNewTaco = {
    id: lastId,
    name: newTaco.name,
    price: newTaco.price
  };
  tacos.push(createNewTaco);
  return createNewTaco;
};

export const updateTaco = (updateTaco: UpdateTaco) => {
  let getTaco = tacos.find((getTaco) => getTaco.id === updateTaco.id);
  if (!getTaco) {
    throw Error
  } else {
  let getName = getTaco.name;
  let getprice = getTaco.price;
  let updateATaco = {
    id: updateTaco.id,
    name: updateTaco.name || getName,
    price: updateTaco.price || getprice
  };
  tacos.splice(getTaco.id - 1, 1, updateATaco);
  return tacos;
  }

};

export const deleteTaco = (id: number) => {
  let getTaco = tacos.find((getTaco) => getTaco.id === id);
  if (!getTaco) {
    throw Error
  } else {
    let identifier = getTaco.id;
    tacos.splice(identifier - 1, 1);
    return tacos;
  }
};
