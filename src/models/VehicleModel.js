import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({
  _id: Number,
  imgUrl: String,
  year: String,
  make: String,
  model: String,
  price: String,
  km: String,
  miles: String,
  fuel: String,
  city: String,
  newCar: Boolean
});

export default mongoose.model('Vehicle', vehicleSchema);
