import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({
  city: String,
  fuel: String,
  image: String,
  km: String,
  miles: String,
  model: String,
  newCar: String,
  price: String,
  year: String,
});

export default mongoose.model('Vehicle', vehicleSchema);

/*



  image: String,
  year: String,
  make: String,
  model: String,
  price: String,
  km: String,
  miles: String,
  fuel: String,
  city: String,
  newCar: String,
  */
