import React from 'react';
import { render } from 'react-dom';

// Register Hooks.
import hook from './hook';
import './bundles/registerMaterialUI';

const Button = hook('material-ui/Button')();

const App = () => (
  <Button>
    Haha
  </Button>
);

document.addEventListener('DOMContentLoaded', () => {

  render(
    <App />,
    document.querySelector('#app')
  );

});
