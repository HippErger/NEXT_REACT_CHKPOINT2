import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../store';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Link from 'next/link';
import {
  deleteThisItem,
  vehicleListLoad,
 } from '../actions';

/* eslint-disable no-unused-vars*/

class vehiclesPage extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    // This is destructuring of the the props into the key/value pairs they are.
    const {items, error, loading} = this.props;

    const instances = items.map( instance => {
      return (

          <tr key={instance._id}>
            <td>{instance.year}</td> &nbsp; &nbsp;
            <td>{instance.make}</td> &nbsp; &nbsp;
            <td>{instance.model}</td> &nbsp; &nbsp;
            <Link href={{pathname: '/vehicledetails', query: {_id: instance._id}}} >
              See More
            </Link>
            &nbsp; &nbsp;
            <button onClick={() => {this.props.deleteItem(instance._id);}} >
              Delete
            </button>
            &nbsp; &nbsp;
            <a href='#' > Edit </a> &nbsp; &nbsp;
          </tr>
      );
    });

    return (
      <div>
        <Header />
        <h5>We&apos;re here</h5>
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
  deleteItem: PropTypes.func.isRequired,

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
    },
    deleteItem: id => {
      dispatch(deleteThisItem(id));
    }
  };
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(vehiclesPage);
