import React from 'react';
import './App.css';
import Profile from './comp/pages/Profile/Profile';
import News from './comp/pages/News/News';
import Music from './comp/pages/Music/Music';
import Settings from './comp/pages/Settings/Settings';
import Header from './comp/Header/Header';
import Navbar from './comp/Navbar/Navbar';
import Dialogs from './comp/pages/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/*<Route path='/dialogs' component={Dialogs} />*/}
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
