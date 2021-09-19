import { Button, Container, TextField, Typography, Card, CardHeader, Avatar, CardContent, CardActions, IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

export default function MyPage() {
    return (
        <Container maxWidth='md'>
            {/* <Typography >I am a label</Typography>
            <TextField label='standard'></TextField>
            <Button variant="contained" color='primary' style={{
                margin: '32px'
            }}>Click me</Button> */}
            <Card elevation={13}>
                <CardHeader
                    title="Demo Card"
                    subheader='23 Aug, 2021'
                    avatar={
                        <Avatar>A</Avatar>
                    }>
                </CardHeader>
                <CardContent>
                    <Typography paragraph>Method: </Typography>
                    <Typography paragraph>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.</Typography>
                    <Typography paragraph>Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.</Typography>
            <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
            <CardActions>
                <IconButton aria-label='favorite action'>
                    <FavoriteIcon/>
                </IconButton>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
            </CardActions>
            </Card>
        </Container>
    );
}