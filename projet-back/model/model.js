const { string } = require("joi");
const{Schema,model,Types}=require("mongoose")

const  oeuvreSchema = new Schema({
     nom : {type: String,required :true}  ,
     description : {type: String,required :true} ,
      image : {type: String, default:"https://source.unsplash.com/random/400x200"},
      auteur : { type: String , ref : "users" ,required:false },
     dt_creation : {type: Date,required :true} 
   
});
const Oeuvre=model("oeuvre",oeuvreSchema);

const userShema=new Schema({
    
    email : {type: String,required :true}  ,
    password :{type: String,required :true} ,
    role : {type:String, enum:["redacteur","admin"]}
      
})
const User=model("model",userShema);

module.exports.Oeuvre=Oeuvre
module.exports.User=User