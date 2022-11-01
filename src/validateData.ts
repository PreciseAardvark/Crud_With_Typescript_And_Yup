import {NextFunction, Request, Response} from "express"

export function validateData(schema) {

    async function res(req: Request, res: Response, next: NextFunction) {
        try {
            await schema.validate ({
            body: req.body,
            params: req.params,
            query: req.query
            })
            next()
        } 
        catch (error) {
            res.json({error: error})
        }
    }
    return res
}