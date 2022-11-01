import express from "express";
import { validateData } from "./validateData"
import { createTacoSchema,readTacoSchema, updateTacoSchema, deleteTacoSchema } from "./validations"
const router = express.Router();

import {
    allTacos,
    readTaco,
    newTaco,
    UpdateTaco,
    destroyTaco
} from "./controller";

//Para poder leer y validar los datos correctamente, validamos los datos y si todo es correcto
//entonces se realizará el llamado a la base de datos (ejecutará la función)

//Read all Tacos
router.get("/", allTacos);

//Para decirle que el valor es dinamico colocamos ':' antes del valor
router.get("/:id", validateData(readTacoSchema),readTaco)

router.post("/", validateData(createTacoSchema), newTaco);

//UpdateTaco
router.put("/:id", validateData(updateTacoSchema), UpdateTaco);

//Delete Taco
router.delete("/:id", validateData(deleteTacoSchema),destroyTaco);

export default router 