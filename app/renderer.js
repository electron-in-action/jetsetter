import React from 'react';
import { render } from 'react-dom';

const Application = () => {
  return <h1>Hello World</h1>;
};

render(<Application />, document.getElementById('application'));
