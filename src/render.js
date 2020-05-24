import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { addPost } from './Redux/state';

export let renderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
  <BrowserRouter>
        <App state={state} addPost={addPost}/>
  </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}
// renderEntireTree();
