import vehicleModel from '../models/VehicleModel';

const VehicleController = {
  create: (request, response, next) => {
    const addedVehicle = new vehicleModel(request.body);

    addedVehicle.save()
      .then(() => {
        return response.json(addedVehicle);
      })
      .catch(err => {
        return next(err);
      });
  },

  list: (request, response, next) => {
    vehicleModel.find({}).exec()
      .then(data => {
        console.log('Vehicle DB fetched');
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  listOne: (request, response, next) => {
    const query = request.params.id;

    vehicleModel.findById(query)
      .then(data => {
        console.log('Vehicle DB, individual was requested,');
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  update: (request, response, next) => {
    const itemBody = request.body;

    vehicleModel.findById(request.params.id).exec()
      .then(data => {
        data.image = itemBody.image || data.image;
        data.year = itemBody.year || data.year;
        data.make = itemBody.make || data.make;
        data.model = itemBody.model || data.model;
        data.price = itemBody.price || data.price;
        data.km = itemBody.km || data.km;
        data.miles = itemBody.miles || data.miles;
        data.fuel = itemBody.fuel || data.fuel;
        data.city = itemBody.city || data.city;

        console.log('Vehicle ', request.params.id, ' was updated');
        return data.save();
      })
        .then(data => {
          return response.json(data);
        })
        .catch(err => {
          return next(err);
        });
  },

  delete: (request, response, next) => {
    const query = request.params.id;

    vehicleModel.findByIdAndRemove(query).exec()
      .then(data => {
        console.log('Vehicle ', query, 'was deleted');
        return response.json(data);
      })
      .catch(err => {
        console.log('This is from VehController, 76', query);
        console.log('This is from VehController, 77', err.message);
        return next(err);
      });
  }
};

export default VehicleController;
