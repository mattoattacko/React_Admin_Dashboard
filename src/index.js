import React from 'react'
import ReactDOM from 'react-dom' //hook our react to the DOM

import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
<ContextProvider>
  <App />
</ContextProvider>,
document.getElementById('root'));