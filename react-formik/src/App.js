import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import BasicForm from './component/BasicForm.js';
import YupValidation from './component/YupValidation.js';

function App() {
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="p-4 border rounded bg-light custom-form">
              <h2 className="mb-3">Formik</h2>
              <BasicForm />
            </div>
          </div>
        </div>
      </div> <br /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="p-4 border rounded bg-light custom-form">
              <h2 className="mb-3">Formik Validation with Yup</h2>
              <YupValidation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
