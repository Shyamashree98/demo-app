import { Container, Grid, Paper, AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core'

export default function Profile(){
    return(
        <Paper elevation={3} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            marginTop: 24
        }}>
        <Avatar style={{
            width: 80,
            height: 80,
            borderWidth: 2,
            borderColor: "#f8eeee",
            borderStyle: 'solid',
        }}>
        J
        </Avatar>
        <Typography variant='h5' style={{
            fontWeight: 600,
            marginTop: 12,
            marginBottom: 12
        }}>
        John Doe
        </Typography>
        <Typography>
        johndoe@john.com
        </Typography>
        <Typography>
        94385xxxxx
        </Typography>
        </Paper>
        );
    }