import {Paper, Typography, Fab} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import dynamic from 'next/dynamic';
import React from 'react';
const TextField = dynamic(() => import('@material-ui/core/TextField'), { ssr: false });


export default function UserPost(){
    
    const [title, setTitle] = React.useState('');
    const [details, setdetails] = React.useState('');
    const [titleError, setTitleError] = React.useState('');
    const [detailsError, setDetailsError] = React.useState('');
    const handleSaveData = () => {
        
        if (title === '') {
            setTitleError('Enter a title to your post');
        } else {
            setTitleError('');
        }
        if (details === '') {
            setDetailsError('Enter content of your post');
        } else {
            setDetailsError('');
        } 
    }  
    return(     
        <Paper elevation={3} style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 24,
            marginTop: 24
        }}>
        <Typography variant="h6">Post your thoughts</Typography>
        <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        error={titleError === '' ? false : true}
        helperText={titleError}
        style={{
            marginTop: "20px",
        }}  />
        <TextField
        id="outlined-basic"
        label="Start typing..."
        multiline
        rows={5}
        variant="outlined"
        error={detailsError === '' ? false : true}
        helperText={detailsError}
        style={{
            marginTop: "20px",
            
        }}  />
        <div style={{
            display: "flex",
            flexDirection: "row-reverse"
        }}>
        <Fab color="primary" aria-label="add" style={{
            marginTop:"20px",
            
        }} onClick={handleSaveData} >
        <ArrowForwardIosIcon />
        </Fab>
        </div>
        </Paper>
        
        
        );
    }