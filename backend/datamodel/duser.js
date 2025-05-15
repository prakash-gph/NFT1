import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },

    role: {
        type: String,
        default: "user"
    },

}, { timestamps: true })

export const user = mongoose.model("User", schema)
//CONTACT INFORMATION
const contactInfromation = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: Number,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "User contact information"
    }

}, { timestamps: true })

export const contact = new mongoose.model("Contact-Collection", contactInfromation)
//BECOME VOLUNTEER

const volunteer = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: Number,
        require: true,
    },
    city: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "Volunteer"
    },

}, { timestamps: true })

export const volunteerData = mongoose.model("Volunteer-Datas", volunteer)

// const adminSendOtp = new mongoose.Schema({
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require:true
//     },
//     adminOtp: {
//         type: String,
//         default: ""
//     },
//     adminExpireOtp: {
//         type: Number,
//         default: 0
//     }
// })


// export const adminResetPassword = mongoose.model("adminSendOtp", adminSendOtp)