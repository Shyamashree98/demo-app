import { Box, Button, Paper, Typography, Checkbox, InputAdornment, IconButton, CircularProgress } from "@material-ui/core";
import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Link from 'next/link';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import loginAPI from "./api/login";

const TextField = dynamic(() => import('@material-ui/core/TextField'), { ssr: false });

export default function MyLoginPage() {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userNameError, setUserNameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [isObscure, setIsObscure] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    
    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    };
    
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    
    const validateFields = () => {
        const emailRegEx = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (userName === '') {
            setUserNameError('Username can\'t be empty');
            return false;
        } else if (!emailRegEx.test(userName)) {
            setUserNameError('Invalid Email');
            return false;
        } else {
            setUserNameError('');
        }
        if (password === '') {
            setPasswordError('Password can\'t be empty');
            return false;
        } else {
            setPasswordError('');
        }
        return true;
    }
    
    const handleSaveData = async () => {
        if(validateFields()){
            setIsLoading(true);
            const response = await loginAPI(userName, password);
            if(response.data.result !== null){
                setIsLoading(false);
                if(response.data.result === false){
                    console.log(response.data.reason);
                } else {
                    console.log("Login is successful and my user id is"+response.data.id);
                    Router.replace('/');
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
        <Paper elevation={4} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60vh',
            padding: 50,
            flexDirection: 'column'
            
        }} >
        <Typography variant="h4" color="primary"><b>LOGIN</b></Typography>
        <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        error={userNameError === '' ? false : true}
        helperText={userNameError}
        style={{
            marginTop: "20px",
            width: "45vh"
        }} onChange={handleChangeUserName} />
        <TextField id="outlined-basic"
        label="Password"
        error={passwordError === '' ? false : true}
        helperText={passwordError}
        variant="outlined" type={isObscure ? 'text' : 'password'} style={{
            marginTop: "20px",
            width: "45vh"
        }} onChange={handleChangePassword}
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
        <Box style={{
            height: "1vh"
        }}>
        </Box>       
        {
            isLoading ? <CircularProgress/> : <Button variant="contained" color="primary" style={{
                marginTop: "40px"
            }} onClick={handleSaveData}>
            Login
            </Button>
        }
        <div style={{
            margin: 16
        }}>
        <Link href='/MyRegisterPage'>
        <a>Register Now</a>
        </Link>
        </div>
        </Paper>
        </Box>
        );
    }