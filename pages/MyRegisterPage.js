import { Box, Button, Paper, Typography, InputAdornment, Container, IconButton, FormControl, FormControlLabel, FormLabel, FormHelperText } from "@material-ui/core";
import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import dynamic from 'next/dynamic';
import registerAPI from "./api/register";

const TextField = dynamic(() => import('@material-ui/core/TextField'), { ssr: false });
const RadioGroup = dynamic(() => import('@material-ui/core/RadioGroup'), { ssr: false });
const Radio = dynamic(() => import('@material-ui/core/Radio'), { ssr: false });

export default function Register() {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [phoneError, setPhoneError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [isObscure, setIsObscure] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [radioError, setRadioError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    
    
    
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setRadioError(false);
    };
    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };
    
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const validateFields = () => {
        const emailRegEx = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (email === '') {
            setEmailError('Email can\'t be empty');
            return false;
        } else if (!emailRegEx.test(email)) {
            setEmailError('Invalid Email');
            return false;
        } else {
            setEmailError('');
        }
        if(phone === ''){
            setPhoneError('Phone can\'t be empty');
            return false;
        }
        else{
            setEmailError('');
        }
        if(firstName === ''){
            setFirstNameError('First name can\'t be empty');
            return false;
        } else{
            setFirstNameError('');
        }
        if(lastName === ''){
            setLastNameError('Last name can\'t be empty');
            return false;
        } else{
            setLastNameError('');
        }
        if (password === '') {
            setPasswordError('Password can\'t be empty');
            return false;
        } else {
            setPasswordError('');
        }
        if(value === ''){
            setRadioError(true);
            setHelperText("Choose an option");
            return false;
        }

        return true;
        
    }
    const handleSaveData = async () => {
        if(validateFields()){
            setIsLoading(true);
            const response = await registerAPI(firstName, lastName, email,phone,value, password);
            if(response.data.result !== null){
                setIsLoading(false);
                if(response.data.result === false){
                    console.log(response.data.reason);
                } else {
                    console.log("Register is successful and my user id is"+response.data.uid);
                    // Router.replace('/');
                }
            }
        }
    };
    
    return (
        <Box style={{
            display: "flex",
            justifyContent: "Center",
            alignItems: "Center",
            height: "100vh"
        }} >
        <Paper elevation={10} style={{
            display: "flex",
            justifyContent: "Center",
            flexDirection: "column",
            width: "90vh",
            height: "75vh",
            padding: 32
        }}  >
        <Typography variant="h4" color="primary"><b>REGISTER</b></Typography>
        
        <TextField id="outlined-basic" label="Enter Firstname"
        variant="outlined"
        error={firstNameError === '' ? false : true}
        helperText={firstNameError} 
        fullWidth 
        style={{
            marginTop: "20px",
        }} 
        onChange={handleChangeFirstName} />
        <TextField id="outlined-basic" label="Enter Lastname" 
        fullWidth 
        variant="outlined" 
        error={lastNameError === '' ? false : true}
        helperText={lastNameError}  
        style={{
            marginTop: "20px",
        }} onChange={handleChangeLastName} />
        
        <TextField id="outlined-basic" fullWidth label="Enter Email" 
        variant="outlined" 
        error={emailError === '' ? false : true}
        helperText={emailError}  
        style={{
            marginTop: "20px",
        }} onChange={handleChangeEmail} type="email" />
        
        <TextField id="outlined-basic" fullWidth label="Enter Phone" 
        variant="outlined" 
        error={phoneError === '' ? false : true}
        helperText={phoneError}  
        style={{
            marginTop: "20px",
        }} onChange={handleChangePhone} type="number" />
        
        <div style={{
            display: 'flex',
            justifyContent: "start",
            marginTop: 12,
            alignItems: 'center',
        }}>
        <Typography style={{
            paddingLeft: 16,
            paddingRight: 16
        }}>Gender</Typography>
        <FormControl error={radioError}>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleRadioChange} error = {radioError === false ? false : true}row >
        <FormControlLabel value="1" control={<Radio />} label="Female" />
        <FormControlLabel value="2" control={<Radio />} label="Male" />
        <FormControlLabel value="3" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
        </div>
        <TextField id="outlined-basic" fullWidth label="Password" 
        variant="outlined" 
        type={isObscure ? 'text' : 'password'} 
        style={{
            marginTop: "20px",
        }} 
        error={passwordError === '' ? false : true}
        helperText={passwordError}  
        onChange={handleChangePassword}
        InputProps={{
            endAdornment:
            <InputAdornment position='end'>
            <IconButton edge='end' onClick={() => {
                setIsObscure(!isObscure)
            }}>
            {
                isObscure ? <VisibilityIcon /> : <VisibilityOffIcon />
            }
            </IconButton>
            </InputAdornment>
        }}
        />
        
        <Button variant="contained" color="primary" style={{
            marginTop: "40px"
        }} onClick={handleSaveData}>
        Register
        </Button>
        </Paper>
        </Box>
        );
    }