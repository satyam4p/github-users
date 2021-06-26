import React from 'react';
import './App.css';
import Main from './pages/main';
import MainContext from './context/mainContext';
function App() {
  const [ users, setUsers ] = React.useState({});
  const [ error, setError ] = React.useState({});
  return (
    <div className="App">
      <MainContext.Provider value={{ users, setUsers, error, setError}}>
      <Main/>
      </MainContext.Provider>
    </div>
  );
}

export default App;
