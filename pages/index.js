import { Container, Grid, Paper, AppBar, Toolbar, Typography, Button, Avatar } from '@material-ui/core';
import Profile from '../src/Profile';
import CardList from '../src/CardList';
import UserPost  from '../src/UserPost';

export default function Home() {
  return (
    
    <div>
    <AppBar position="static">
    <Toolbar style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
    <Typography variant="h6">
    BLOGZZ
    </Typography>
    <Button color="inherit">Logout</Button>
    </Toolbar>
    </AppBar>
    <Container maxWidth='lg'>
    <Grid container spacing={3}>
    <Grid
    item
    md={3}
    >
    <Profile/>
    </Grid>
    <Grid
    item
    md={6}
    >
    <CardList/>
    </Grid>
    <Grid
    item
    md={3}
    >
    <UserPost/>
    <div style={{
      display:"flex",
      justifyContent: "center",
      marginTop: "30px"
    }}>
    <Button variant="contained" color="primary" style={{
      
    }}>
    Go To My Posts
    </Button>
    </div>
    </Grid>
    </Grid>
    </Container>
    </div>
    );
  }
