import React from 'react';

const wrapper = Render => props => (
  <Render
    news={42}
    {...props}
  />
);


export default wrapper;
