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

class vehiclesPage extends Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    // This is destructuring of the the props into the key/value pairs they are.
    /* eslint-disable no-unused-vars */
    const {items, loading, error} = this.props;

    // const urlString = 'https://www.google.com/search?q=2008+toyota+prius&tbm=isch&imgil=GelOqbXv6MoLZM%253A%253B3ZQv7-I1qAu5RM%253Bhttps%25253A%25252F%25252Fwww.edmunds.com%25252Ftoyota%25252Fprius%25252F2008%25252F&source=iu&pf=m&fir=GelOqbXv6MoLZM%253A%252C3ZQv7-I1qAu5RM%252C_&usg=__1jjnWKamS2tG2cszNvOSt1h8GYg%3D&biw=1920&bih=939&ved=0ahUKEwjuu_7q7tLUAhVL4yYKHds9BOYQyjcIkgE&ei=mHVMWe6PJMvGmwHb-5CwDg#imgrc=GelOqbXv6MoLZM:';
    //
    // console.log(urlString.length);

    const instances = items.map( instance => {
      return (
          <tr key={instance._id}>
            <td>{instance.year}</td> &nbsp; &nbsp;
            <td>{instance.make}</td> &nbsp; &nbsp;
            <td>{instance.model}</td> &nbsp; &nbsp;
            <Link
              href={{pathname: '/vehicledetails',
                query: {_id: instance._id}}} >
              <button>
                See More
              </button>
            </Link>
            &nbsp; &nbsp;
            <button
              onClick={
                () => {this.props.deleteItem(instance._id);}} >
              Delete
            </button>
            &nbsp; &nbsp;
            <button>
              Edit
            </button> &nbsp; &nbsp;
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
