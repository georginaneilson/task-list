import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import ToDoContainer from './components/ToDoContainer/ToDoContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
