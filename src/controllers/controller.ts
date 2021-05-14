import {getAll,create} from "../models/models"
import {Request, Response} from 'express'
import {squareValidation,rectangleValidation,triangleValidation,circleValidation} from "../joiValidation"

interface resultInterface {
    shape:string,
    dimension: Record<string,number> | number,
    Area : number
}

export async  function fetchRecords(req:Request,res:Response){
    let allRecord = await getAll();
    if(!allRecord){
        return res.status(404).json({error: "no record found"});
    }
    res.status(200).json(allRecord)
}

export async function calculate(req:Request,res:Response){
    const {shape, dimension} = req.body
    let Area: number;
    let result:resultInterface;

    switch(shape){
        case 'square':
            let squareError = squareValidation(req.body).error
            if(squareError){
                return res.status(400).json({error: squareError.details[0].message})
            }
            Area = dimension**2;
        result = {
            shape,
            dimension,
            Area
        }
            break;
        case 'rectangle':
            let rectangleError = rectangleValidation(req.body).error
            if(rectangleError){
                return res.status(400).json({error: rectangleError.details[0].message})
            }
            Area = dimension.a * dimension.b
            result = {
                shape,
                dimension,
                Area
            }
            break;
        case 'triangle':
            let triangleError = triangleValidation(req.body).error
            if(triangleError){
                return res.status(400).json({error: triangleError.details[0].message})
            }
            const semiP = (dimension.a + dimension.b + dimension.c)/2
            Area = Number(Math.sqrt(semiP*(semiP-dimension.a)*(semiP-dimension.b)*(semiP-dimension.c)).toFixed(2))
            result = {
                shape,
                dimension,
                Area
            }
            break;
        case 'circle':
            let circleError = circleValidation(req.body).error
            if(circleError){
                return res.status(400).json({error: circleError.details[0].message})
            }
            Area = Number((Math.PI * dimension **2).toFixed(2))
            result = {
                shape,
                dimension,
                Area
            }
            break;
        default:
            return res.status(404).json({message:"Only shape from square, rectangle,triangle and circle is allowed"})
    }

    let newResult = await create(result)
    res.status(201).json(newResult)


}