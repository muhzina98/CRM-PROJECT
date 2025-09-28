import { model, Schema } from "mongoose";


const userSchema = Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
role: { type: String, enum: ['admin','user'], default: 'user' }
}, { timestamps: true });


export const User = model('auth', userSchema);