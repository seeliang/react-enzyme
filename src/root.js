import React, {Component} from 'react';
import wrapper from './higherOrderWrap';
class Root extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    alert('click this');
    this.props.submit();
  }

  render() {
    return (
      <form onSubmit={() => this.click()}>
      <h1> Hello world</h1>
      <input type="checkbox"/>
      <button type="submit"> this</button>
      </form>
    );
  }
}

export default wrapper(Root);
