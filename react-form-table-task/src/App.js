// App.js
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Form from './components/Form';
import Table from './components/Table';
import useDataStore from './hook/useDataStore';

function App() {
  const {data, addData, updateData, deleteData} = useDataStore();

  return (
    <Routes>
      <Route path="/" element={<Table data={data} updateData={updateData} deleteData={deleteData} />} />
      <Route path="/form" element={<Form addData={addData}/>} />
      <Route path="/form/:formId" element={<Form addData={addData} data={data}/>} />
    </Routes>
  );
}

export default App;
