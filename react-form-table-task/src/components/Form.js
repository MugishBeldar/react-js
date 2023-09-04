// Form.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import {useNavigate,useParams} from 'react-router-dom'

function Form({addData, data}) {
  const navigate = useNavigate();
  const {formId} = useParams();
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    address: '',
    phone: '',
    email: '',
  });

  React.useEffect(() => {
    if (typeof formId !== 'undefined' && data[formId]) {
      setFormData(data[formId]);
    }
  }, [formId, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof formId !== 'undefined') {
      // If an formId is provided in the route, update the data at that formId
      data[formId] = formData;
    } else {
      // Otherwise, add new data
      addData(formData);
    }
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" align="center" gutterBottom>
          User Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Middle Name"
              name="middlename"
              value={formData.middlename}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone No"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        <Grid item xs={12} sm={4}>

        <Button type="submit" variant="contained" color="primary" size="medium">
          {typeof formId !== 'undefined' ? 'Update' : 'Submit'}
        </Button>
        </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Form;
