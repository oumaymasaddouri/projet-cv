const mongoose = require("mongoose");
const { Schema } = mongoose;
const cvschema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    Owner: {
        type: String,
    },
    AboutMe: {
        key: { type: Number },
        value: { type: String },
    },
    Header: {
        Parcour: {
            type: String,
        },

        Tel: {
            type: String,
        },
        ProfileImg: {
            type: String,
        },
        Adress: {
            type: String,
        },
        lastName: {
            type: String,
        },
        name: {
            type: String,
        },
    },
    Stages: [
        {
            key: { type: Number },
            NatureStage: { type: String },
            Mission: { type: String },
            Entreprise: { type: String },
            DateFinYear: { type: String },
            DateFinMois: { type: String },
            DateDemarageYear: { type: String },
            DateDemarageMois: { type: String },
        },
    ],
    Competences: [
        {
            key: { type: Number },
            value: { type: String },
        },
    ],
    Langues: [
        {
            key: { type: Number },
            Langue: { type: String },
            Niveau: { type: String },
        },
    ],
    Diplomes: [
        {
            key: {
                type: Number,
            },
            Titre: {
                type: String,
            },
            Date: {
                type: String,
            },
            Etabliss: {
                type: String,
            },

        },
    ],
    status: {
        type: String,
        enum: ["Pending", "Verified"],
        default: "Pending",
    },
    comments: [
        {
            pos: String,
            value: String,
        },
    ],
    correcteur: String,
    PostDate: {
        type: Date,
        default: Date.now(),
    },
    ValidationDate: Date,
    userid: {
        type: Schema.Types.ObjectId, ref: "user"
    }
});

module.exports = mongoose.model("cv", cvschema)