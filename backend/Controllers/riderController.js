const {riderModel} = require("../Models/riderModel");

//Create a new rider
exports.createRider = async (req, res) => {
    const { name, phoneNo, city, channel, lastActive, status } = req.body;
    const rider = new riderModel({ name, phoneNo, city, channel, lastActive, status });
    try {
        const savedRider = await rider.save();
        res.status(201).json({message:"Rider added successfully", savedRider});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

//Retrive all riders
exports.getAllRiders = async (req, res) => {
    try {
        const riders = await riderModel.find();
        res.status(201).json({message:"All riders data.", riders});
    } catch (error) {
        res.status(400).json({ message: err.message }); 
    }
};

//Update a rider
exports.updateRider = async (req, res) => {
    try {
        const updatedRider = await riderModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRider) {
            return res.status(404).json({ message: 'Rider not found' });
        }
        res.status(201).json({message:"Rider's data updated successfully", updatedRider});
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
};

