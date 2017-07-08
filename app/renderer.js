import React from 'react';
import { render } from 'react-dom';
// import Application from './components/Application';

const Application = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <button className="full-width">
        This button doesn't do anything.
      </button>
    </div>
  );
};

render(<Application />, document.getElementById('application'));
