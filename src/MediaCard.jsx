import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://i.ytimg.com/vi/MjEaniGTrx0/maxresdefault.jpg"
                title="cute bird"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Cute Bird
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is a very, very cute bird.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href="https://www.wikipedia.org/">Learn More</a></Button>
            </CardActions>
        </Card>
    );
}