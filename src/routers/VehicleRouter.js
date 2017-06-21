import express from 'express';
import VehicleController from '../controllers/VehiclesController';

const router = express.Router();
const vehiclesPath = '/api/vehicles';

router.post(vehiclesPath, VehicleController.create);
router.get(vehiclesPath, VehicleController.list);
router.get(vehiclesPath + '/:id', VehicleController.listOne);
router.put(vehiclesPath + '/:id', VehicleController.update);
router.delete(vehiclesPath + '/:id', VehicleController.delete);

export default router;
