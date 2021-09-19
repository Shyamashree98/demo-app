import { Button, Container, TextField, Typography, Card, CardHeader, Avatar, CardContent, CardActions, IconButton } from "@material-ui/core";


export default function CardList() {
    return (
        <Card elevation={3} style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 24,
            marginTop: 24
        }}>
        <CardHeader
        title="Neil Caffrey"
        subheader='Paris'
        avatar={
            <Avatar>NC</Avatar>
        }>
        </CardHeader>
        <CardContent>
        
        <Typography paragraph>I recently sat down with Versailles-based pastry chef 
        Molly Wilkinson to discuss her life in France and all things pastry, including her new 
        book French Pastry Made Simple. After leaving her job in digital marketing, she made the leap
        across the pond to study pastry at Le Cordon Bleu, and eventually 
        start teaching her own pastry classes! </Typography>
        </CardContent>
        
        </Card>
        
        );
    }