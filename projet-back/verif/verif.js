const Joi = require("joi")

const schemaJoiUser = Joi.object({
    email : Joi.string().email({ tlds: { allow: false } }).required(),
    password : Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required(),
    role : Joi.string().valid("redacteur","admin").required()
});

const schemaLogin = Joi.object({
    email : Joi.string().email({ tlds: { allow: false } }).required(),
    password : Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required()
});
const schemaOeuvreJoi = Joi.object({  
    nom : Joi.string().min(5).max(255).required(),
    description: Joi.string().min(5).max(10000).required(),
    image:Joi.string().uri(),
})
module.exports.schemaJoiUser = schemaJoiUser ;
module.exports.schemaOeuvreJoi = schemaOeuvreJoi ;
module.exports.schemaLogin = schemaLogin ;

