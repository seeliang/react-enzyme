import React, {Component} from 'react';

const wrapper = Render => {
  return class Wrap extends Component {

    render() {
      return  (<Render news={42}
        {...this.props}
      />);
    }
  };
};

export default wrapper;
