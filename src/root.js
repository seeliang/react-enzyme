import React from 'react';
import wrapper from './higherOrderWrap';

const Root = ({ submit }) => (
  <form onSubmit={() => submit()}>
    <h1> Hello world</h1>
    <input type="checkbox" />
    <button type="submit"> this</button>
  </form>
);

export default wrapper(Root);
