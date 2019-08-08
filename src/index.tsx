import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './containers/Table/Table';

const appElement = document.getElementById('ac-contacts') as HTMLElement;

ReactDOM.render(<Table />, appElement);
