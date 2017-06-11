import express from 'express';
// import VehicleController from '../controllers/VehiclesController';

const router = express.Router();
const VEHICLES_PATH = '/api/vehicles';
// const PATH_NAME = '/api';

// router.post(vehiclesPath, VehicleController.create);
// put this in instead: VehicleController.list

router.get(VEHICLES_PATH, (request, response) => {
  return response.json('got the vehicle we wanted!');
});


// router.get(vehiclesPath + '/:id', VehicleController.listOne);

// router.put(vehiclesPath + "/:id", VehicleController.update);

// router.delete(vehiclesPath + "./:id", VehicleController.delete);

export default router;
