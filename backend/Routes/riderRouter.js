const express = require('express');
const { createRider, getAllRiders, updateRider } = require('../Controllers/riderController');
const rideRouter = express.Router();

// Create a new rider
rideRouter.post('/addRider', createRider);

// Get all riders
rideRouter.get('/allRiders', getAllRiders);

// Update a rider
rideRouter.put('/rider/:id', updateRider);



module.exports = rideRouter;
