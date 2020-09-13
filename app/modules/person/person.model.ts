import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	address: { type: Array, required: true },
	age: { type: Number, required: true, default: 0 },
},
	{ timestamps: { createdAt: 'created_at' } }
);

//Creating our model
export const Person = mongoose.model("Person", PersonSchema);