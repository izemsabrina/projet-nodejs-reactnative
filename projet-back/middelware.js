const {schemaOeuvreJoi}=require("./verif/verif")
const { isValidObjectId } = require("mongoose")

const JWT = require("jsonwebtoken")


function idValid(request , reponse, next){
    const id = request.params.id ;
       if(!isValidObjectId(id)) return reponse.status(400).json({msg : `l'id ${id} n'est pas valide pour MongoDB` , where : "middleware"})
    next(); 
}
function isValidOeuvre(request , reponse, next){
    const { body } = request; 
    const {error} = schemaOeuvreJoi.validate(body , { abortEarly : false})
    if(error) return  reponse.status(400).json(error.details)
    next();
}

function autorisation (request , reponse, next){
    const token = request.header("x-token")
      if(!token) return reponse.status(401).json({msg : "vous devez avoir un token JWT pour réaliser cette opération"})
    try{
        const payload = JWT.verify(token , process.env.CLE_PRIVEE_JWT)
        request.user = payload
        next();
        
    }
    catch(ex){
       reponse.status(400).json({msg : "JWT invalid"})
    }
}
function isAdmin(request, reponse , next){
    if(request.user.role !== "admin") return reponse.status(403).json({msg : "vous n'avez les droits pour effectuer cette action"})
    next()
}
module.exports.idValid = idValid
module.exports.autorisation = autorisation
module.exports.isAdmin = isAdmin
module.exports.isValidOeuvre=isValidOeuvre