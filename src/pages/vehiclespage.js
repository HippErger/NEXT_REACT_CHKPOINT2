import React, {Component} from 'react';
// import Link from 'next/link';
// import VehiclesContainer from '../containers/Vehicles_Container';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
// import Header from '../components/Header';
// import {
//   loadVehicles,
//
// } from '../actions';

class vehiclesPage extends Component {
  render() {
    return (
      <h3>This is the VehiclesPage</h3>
    );
  }
}

export default withRedux(initStore, null, null)(vehiclesPage);


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
