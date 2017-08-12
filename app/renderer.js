import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './components/Application';

const renderApplication = async () => {
  const { default: Application } = await import('./components/Application');
  render(
    <AppContainer>
      <Application />
    </AppContainer>,
    document.getElementById('application')
  );
};

renderApplication();

if (module.hot) { module.hot.accept(renderApplication); }
