import { model } from "mongoose";
import { Schema } from "mongoose";


const customerSchema = Schema({
name: { type: String, required: true },
email: { type: String, required: true },
phone: { type: String },
company: { type: String },
notes: { type: String }
}, { timestamps: true });


export const Customer = model('custom', customerSchema);