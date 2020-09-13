import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 0 },
  { id: 2, message: 'ist my first post', likesCount: 23 },
  { id: 3, message: 'Yo', likesCount: 2 },
  { id: 4, message: 'Yo', likesCount: 10 },
  { id: 5, message: 'Yo', likesCount: 3 },
  { id: 6, message: 'Yo', likesCount: 20 }
]
let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Andrew' },
  { id: 3, name: 'Victor' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Sasha' },
  { id: 6, name: 'Valera' }
]
let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
  { id: 6, message: 'Yo' }
]
ReactDOM.render(
  
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
