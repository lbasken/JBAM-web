import "./index.css";
import "./MediaCard.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function MediaCard(props) {


    return (
        <Card className="media-card" sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ aspectRatio: "1.5" }}
                image={props.image}
                title={props.name}
            />
            <CardContent>
                <Typography id="media-title" gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography id="media-summary" variant="body2" color="text.secondary">
                    {props.summary}
                </Typography>
            </CardContent>
            <CardActions className="media-button">
                <Button size="small"><a href={props.info}>Learn More</a></Button>
            </CardActions>
        </Card>
    );
}