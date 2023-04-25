const {Router}=require("express")
const{User, Users}=require("../model/model")
const { schemaJoiUser } = require("../verif/verif") 
const route=Router()
const{genSalt,hash}=require("bcrypt")
const { isValidObjectId } = require("mongoose")
route.post("/",async(request,reponse)=>{
    const {body}=request;
    const {error} = schemaJoiUser.validate(body , {abortEarly : false})
    if(error) return reponse.status(400).json(error.details)
    const userRecherche = await User.find({email : body.email}) 
    if(userRecherche.length > 0) return reponse.status(400).json({ msg : "email déjà pris" });
    const salt = await genSalt(10)
    const passwordHashe = await hash(body.password , salt)
    const userNouveau = new User({ ...body , password : passwordHashe }) 
    await userNouveau.save() 
    return reponse.json({msg : "profil user créé"})  
})
route.get("/all", async(request,reponse)=>{ 
 const{body}=request
   const allUser=await User.find().select({_id:1,email:1,role:1,password:1}) 
   reponse.json(allUser)
})
    route.delete("/:id", async (request , reponse) => {
        const id = request.params.id ; 
       
        if(!isValidObjectId(id)) return reponse.status(400).json({msg : `id ${id} est invalide`})
      
        const UserASupprimer = await User.findByIdAndRemove(id)
        
        if(!UserASupprimer) return reponse.status(404).json({msg : `Profil introuvable avec l'id mentionné : ${id}`})
       
        reponse.json({msg : `profil ${id} est supprimé`})
    })

module.exports=route