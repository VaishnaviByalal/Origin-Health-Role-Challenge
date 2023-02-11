import React from 'react'
import './App.css'
import Login from './Login/Login'
import { useSelector } from 'react-redux';
import { UserState } from './store/reducer';
import Dashboard from './Dashboard/Dashboard';

function App() {

  const login_status = useSelector<UserState,boolean>( (state:UserState) =>state.login_status)

  return (
    <div className="App">
      {!login_status && <Login/>}
      {login_status && <Dashboard />}
    </div>
  )
}

export default App
