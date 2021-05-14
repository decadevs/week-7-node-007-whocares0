import Joi from 'joi'
 export const squareValidation = (data:object) => {
     let schema = Joi.object({
         shape: Joi.string().required(),
         dimension: Joi.number().required()
     })
     return schema.validate(data);

 }
 export const rectangleValidation = (data:object) => {
    let schema = Joi.object({
        shape: Joi.string().required(),
        dimension: Joi.object().min(2).max(2).required()
    })
    return schema.validate(data);

}
export const triangleValidation = (data:object)=> {
    let schema = Joi.object({
        shape: Joi.string().required(),
        dimension: Joi.object().min(3).max(3).required()
    })
    return schema.validate(data);

}
export const circleValidation = (data:object) => {
    let schema = Joi.object({
        shape: Joi.string().required(),
        dimension: Joi.number().required()
    })
    return schema.validate(data);

}