import {
    addNewTaco,
    deleteTaco,
    getAllTacos,
    getTacoById,
    updateTaco
} from "./crud";

import { Request, Response } from "express";

export function allTacos(req, res) {
    const allTacos = getAllTacos();
    res.json(allTacos);
}

export function readTaco(req:Request, res:Response) {
    let id = Number(req.params.id);
    const tacoById = getTacoById(id);
    if (!tacoById) {
        res.status(404).json("Taco not found =(")
        //Ya no es necesario arrojar el error porque ya lo mandamos arribita
        //throw Error('The taco recived is not defined')
    }else{
        console.log(tacoById);
        res.json(tacoById);
    }
}

export function newTaco(req:Request, res:Response) {
    let newTaco = {
    name: req.body.name,
    price: Number(req.body.price)
    };
    const newTaquito = addNewTaco(newTaco);
    console.log("Taco creado" + newTaco);
    res.json(newTaquito);
}

export function UpdateTaco(req:Request, res:Response) {
    let updateTaquito = {
    id: Number(req.params.id),
    name: req.body.name,
    price: Number(req.body.price)
    };
    if (Error) {
        res.status(404).json("Taco not found :(")
    } else {
        const TacoUpdated = updateTaco(updateTaquito)
        res.json(TacoUpdated)
    }
}

export function destroyTaco(req:Request, res:Response) {

    try {
        let id = Number(req.params.id);
        const destroyTaco = deleteTaco(id);
        console.log("Taco deleted")
        res.json(destroyTaco)
    } catch (error) {
        res.json("Error al encontrar el taco").status(404)
    }
    
}