import {connect} from 'react-redux';
import Vehicle from '../components/Vehicle';

function mapStateToProps(state, ownProps) {
  const idOfData = ownProps.match.params._id;
  const foundData = state.vehicles.filter(data => {
    return String(data._id) === idOfData;
  });
  return {
    resultData: foundData.length ? foundData[0] : null
  };
}

export default connect(mapStateToProps)(Vehicle);
