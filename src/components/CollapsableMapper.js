import React, { Component } from 'react';
import Link from 'next/link';
// {'/' + this.props.path + '/' + d._id}
import PropTypes from 'prop-types';

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {
      visible: true};
  }
  render() {
    let buttonText = 'Hide';
    let userDivs = '';
    if (this.state.visible) {
      buttonText = 'Hide';
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.path]}
            &nbsp;
            {d[this.props.field]}
            &nbsp;
            {d[this.props.field1]}
            &nbsp;
            {d[this.props.field2]}
            &nbsp;
            {d[this.props.field3]}
            &nbsp;
            <Link href='/singlevehicle'>
              <button>View Vehicle</button>
            </Link>
          </div>
        );
      });
    } else {
      buttonText = 'Show';
      userDivs = '';
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}

CollapsableMapper.propTypes = {
  // fix this and make it a shape later.

  path: PropTypes.string,
  field: PropTypes.string,
  field1: PropTypes.string,
  field2: PropTypes.string,
  field3: PropTypes.string,
};


export default CollapsableMapper;
