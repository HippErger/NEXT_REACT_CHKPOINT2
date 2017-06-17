import React, {Component} from 'react';
// import Link from 'next/link';
// import VehiclesContainer from '../containers/Vehicles_Container';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
// import Header from '../components/Header';
import {
  vehicleListLoad,
 } from '../actions';

/* eslint-disable no-unused-vars*/

class vehiclesPage extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    // This is destructurin of the the props into the key/value pairs they are.
    const {items, error, loading} = this.props;

    const instances = items.map( instance => {
      return (
        <tr key={instance._id}>
          <td>{instance.year}</td> &nbsp; &nbsp;
          <td>{instance.make}</td> &nbsp; &nbsp;
          <td>{instance.model}</td> &nbsp; &nbsp;
          <button>Delete</button> &nbsp; &nbsp;
          <button>Edit</button> &nbsp; &nbsp;
          <button>Delete</button> &nbsp; &nbsp;
          <br/>
        </tr>
      );
    });

    return (
      <div>
        <h3>This is the VehiclesPage</h3>
        <table>
          <tbody>
              {instances}
          </tbody>
        </table>
      </div>

    );
  }
}

vehiclesPage.propTypes = {
  onMount: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,

};

function mapStateToProps(state) {
// these come from the reducers. I guess through combineReducers and withRedux
// we have access to this object. Use dot notation to get the properties out.
  return {
    loading: state.vehicleList.loading,
    error: state.vehicleList.error,
    items: state.vehicleList.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(vehicleListLoad());
      console.log('component did mount');
    }
  };
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(vehiclesPage);


// class VehiclesPage extends Component {
//   constructor() {
//     super();
//     this.state = {
//
//     };
//   }
// /*
// list: (request, response, next) => {
//   VehicleModel.find({}).exec()
//     .then(data => {
//       console.log('Vehicle DB fetched');
//       return response.json(data);
//     })
//     .catch(err => {
//       return next(err);
//     });
// }
// */
//   componentDidMount() {
//     // loadVehicles();
//   //   function mapDispatchToProps(dispatch) {
//   // return {
//   //   createProduct: (product) => {
//   //     dispatch(createProduct(product));
//   //   },
//   //   createVehicle: (v) => {
//   //     dispatch(createVehicle(v));
//   //   },
//   //   createContact: (contact) => {
//   //     dispatch(createContact(contact));
//   //   },
//   //   createComment: (c) => {
//   //     dispatch(createComment(c));
//   //   },
//   // };
// // }
//
//   }
//   // const vehicle = props.resultData;
//   // const vehicle = 1;
//   // @TODO the vehicle in this if statement needs to be props, not a const
//   render() {
//     if (this.state.vehicle) {
//       return (
//         <div>
//           <Header />
//           <VehiclesContainer />
//           <Link href="/">
//             <button>Home</button>
//           </Link>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <Header />
//         <h4>No vehicles found</h4>
//         <Link href="/">
//           <button>Home</button>
//         </Link>
//       </div>
//     );
//   }
// }
//
// export default withRedux(initStore, null, mapDispatchToProps)(VehiclesPage);

/*
const Page = ({ stars }) => <div>Next stars: {stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
*/
