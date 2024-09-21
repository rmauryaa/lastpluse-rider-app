const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNo: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    channel: { type: String, required: true }, // Swiggy, Zomato, etc.
    lastActive: { type: Date, default: Date.now },
    status: { 
        type: String, 
        enum: ['Active', 'On-ride', 'Deactivate', 'Ideal'], 
        default: 'Active' 
    },
});

const riderModel = mongoose.model("Rider", riderSchema);

module.exports = {riderModel};