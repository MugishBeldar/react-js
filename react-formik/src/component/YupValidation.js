import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import '../css/YupValidation.css'; // Custom CSS file for additional styling

const YupValidation = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      acceptTerms: false,
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'First Name Must be 15 characters or less')
        .required('First Name Required'),
      lastName: Yup.string()
        .max(20, 'Last Name Must be 20 characters or less')
        .required('Last Name Required'),
      email: Yup.string().email('Invalid email address').required('Email Required'),
      gender: Yup.string().required('Gender Required'),
      acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
      message: Yup.string().max(250, 'Message must be 250 characters or less'),
    }),
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="invalid-feedback">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''
            }`}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.lastName}
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="invalid-feedback">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''
            }`}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="invalid-feedback">{formik.errors.email}</div>
        ) : null}
      </div>  

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          className={`form-control ${formik.touched.gender && formik.errors.gender ? 'is-invalid' : ''}`}
          {...formik.getFieldProps('gender')}
        >
          <option value="" label="Select Gender" />
          <option value="male" label="Male" />
          <option value="female" label="Female" />
        </select>
        {formik.touched.gender && formik.errors.gender ? (
          <div className="invalid-feedback">{formik.errors.gender}</div>
        ) : null}
      </div>

      <div className="form-group form-check">
        <input
          id="acceptTerms"
          name="acceptTerms"
          type="checkbox"
          className={`form-check-input ${formik.touched.acceptTerms && formik.errors.acceptTerms ? 'is-invalid' : ''}`}
          {...formik.getFieldProps('acceptTerms')}
        />
        <label className="form-check-label" htmlFor="acceptTerms">I accept the terms and conditions</label>
        {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
          <div className="invalid-feedback">{formik.errors.acceptTerms}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className={`form-control ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
          {...formik.getFieldProps('message')}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="invalid-feedback">{formik.errors.message}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default YupValidation;
