const mongoose = require("mongoose");
const { Schema } = mongoose;
const cvschema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    // AboutMe: {
    //    type: String ,
    //    required: true
    // },
     
    //     Parcours: {
    //         type: String,
    //     },

    //     Tel: {
    //         type: String,
    //     },
        // ProfileImg: {
        //     type: String,
        // },
        //hedhy nekhdmoha bl malter wala bl fire base
    //     Adress: {
    //         type: String,
    //     },
        
        
    
    // Stages: [
    //     {
           
    //         NatureStage: { type: String },
    //         Mission: { type: String },
    //         Entreprise: { type: String },
    //         DateFinYear: { type: String },
    //         DateFinMois: { type: String },
    //         DateDemarageYear: { type: String },
    //         DateDemarageMois: { type: String },
    //     },
    // ],
    // Competences: [
    //     {
    //          type: String 

    //     }  
        
    // ],
    // Langues: [
    //     [{type:String}]
    // ],
    // Diplomes: [
    //     {
            
    //         Titre: {
    //             type: String,
    //         },
    //         Date: {
    //             type: String,
    //         },
    //         Etabliss: {
    //             type: String,
    //         },

    //     },
    // ],
    
    
    

    // PostDate: {
    //     type: Date,
    //     default: Date.now(),
    // },
    
   
});

module.exports = mongoose.model("cv", cvschema)