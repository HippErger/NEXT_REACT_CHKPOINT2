import express from 'express';
import VehicleController from '../controllers/VehiclesController';

const router = express.Router();
const vehiclesPath = '/api/vehicles';

router.post(vehiclesPath, VehicleController.create);
router.get(vehiclesPath, VehicleController.list);
// I guess this path name doesn't have to match the database properties : vs _
router.get(vehiclesPath + '/:id', VehicleController.listOne);
router.put(vehiclesPath + '/:id', VehicleController.update);
router.delete(vehiclesPath + '/:id', VehicleController.delete);

export default router;
