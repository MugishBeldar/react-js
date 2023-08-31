import React from 'react';
import './App.css';
import FirstFetch from './component/FirstFetch';
import ComponentA from './component/context/ComponentA';

export const UserContext = React.createContext();
export const CourseContext = React.createContext();
function App() {
  return (
    <div className="App">
      <FirstFetch />
      <UserContext.Provider value={'Mugish'}>
        <CourseContext.Provider value={'React JS'}>
          <ComponentA />
        </CourseContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
