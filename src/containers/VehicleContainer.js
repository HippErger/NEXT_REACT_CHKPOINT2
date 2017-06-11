import {connect} from 'react-redux';
import Vehicle from '../components/Vehicle';

// add as second argument: ownPropss
function mapStateToProps(state) {
  // const idOfData = ownProps.match.params._id;
  // const foundData = state.vehicles.filter(data => {
  return console.log('mapStateToProps for vehicle container', state);
  //   return String(data._id) === idOfData;
  // });
  // return {
  //   resultData: foundData.length ? foundData[0] : null
  // };
}

export default connect(mapStateToProps)(Vehicle);
