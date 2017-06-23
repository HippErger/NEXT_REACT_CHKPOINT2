import React, {Component} from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import VehicleForm from '../components/VehicleForm';
import PropTypes from 'prop-types';
import {createNewVehicle} from '../actions';

class createVehicle extends Component {

  render() {
    const {error} = this.props;

    return (
      <div>
        <Header />
        <h3>You can add a new vehicle here</h3>
        <VehicleForm
          onSubmit={values => {
            this.props.onSubmit(values);
          }}
        />
        {error && (
          <p>{error}</p>
        )}
        <Link href="/vehiclespage">
          <button >
            Take Me to All Cars
          </button>
        </Link>
        &nbsp; &nbsp;
        <Link href="/">
          <button>
            Home
          </button>
        </Link>
      </div>
    );
  }
}

createVehicle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  // loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    error: state.createVehicle.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: values => {
      dispatch(createNewVehicle(values));
    }};
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(createVehicle);
// import React, {Component} from 'react';
// import Link from 'next/link';
// import Header from '../components/Header';
// import withRedux from 'next-redux-wrapper';
// import {initStore} from '../store';
// import VehicleForm from '../components/VehicleForm';
// import PropTypes from 'prop-types';
// import {createNewVehicle} from '../actions';
//
// class createVehicle extends Component {
//
//   render() {
//     const {error} = this.props;
//
//     return (
//       <div>
//         <Header />
//         <h3>You can add a new vehicle here</h3>
//         <VehicleForm
//           onSubmit={values => {
//             this.props.onSubmit(values);
//           }}
//         />
//         {error && (
//           <p>{error}</p>
//         )}
//         <Link href="/vehiclespage">
//           <button >
//             Take Me to All Cars
//           </button>
//         </Link>
//         &nbsp; &nbsp;
//         <Link href="/">
//           <button>
//             Home
//           </button>
//         </Link>
//       </div>
//     );
//   }
// }
//
// createVehicle.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   error: PropTypes.string,
//   // loading: PropTypes.bool.isRequired,
// };
//
// function mapStateToProps(state) {
//   return {
//     error: state.createVehicle.error
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     onSubmit: values => {
//       dispatch(createNewVehicle(values));
//       console.log('createVeh Pg, 59, dispatched', values);
//     }};
// }
//
// export default withRedux(
//   initStore,
//   mapStateToProps,
//   mapDispatchToProps
// )(createVehicle);
