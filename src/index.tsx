import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './styles/styles.scss';

const appElement = document.getElementById('ac-contacts') as HTMLElement;

ReactDOM.render(<App />, appElement);
