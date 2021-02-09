import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import FormLabel from '@material-ui/core/FormLabel';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  TextareaAutosize: {
    width:'100%',
  }
}));

     
export default function MockFeedBack() {
  const classes = useStyles();

  return (
    <Container component="main" >
      {/* <CssBaseline /> */}
      <div className={classes.paper} >
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Mock FeedBack Sheet
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="empid"
                name="empid"
                variant="outlined"
                required
                fullWidth
                id="empId"
                label="Employee ID"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="fname"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno1"
                label="Emergency Contact Number 1"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Emergency Contact Number 2"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="offEmail"
                label="Official Mail ID"
                name="offemail"
                autoComplete="offemail"
              />
            </Grid>
            
          
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="offEmail"
                label="Personal Mail ID"
                name="peremail"
                autoComplete="peremail"
              />
            </Grid>
            
           
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Year of Passed out"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Stream"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Highest Qualification"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Joining Date"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Total Experience"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Relevant Experience"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Skills on Frontend Technology (For ex: HTML,CSS)"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Skills on Backend Technology (For ex: Core Java,J2EE)"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Database Used (ForEx: SQL, MangoDB)"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item  >
            <TextareaAutosize
               rowsMin={10}
                name="paddress"
              placeholder='Permanent Address'
               defaultValue=''
              className={classes.textarea}
            />

            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Temporary Address"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="City"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="State"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="econtactno2"
                label="Pincode"
                type="number"
                id="econtactno"
                autoComplete="econtactno"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        
      </Box>
    </Container> 
  );
}