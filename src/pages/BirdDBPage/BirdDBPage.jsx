import React, {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import MediaCard from "/src/MediaCard.jsx";
import "./BirdDBPage.css";

export default function BirdDBPage() {

    const [birds, setBirds] = useState([]);
    const [show, setShow] = useState(true);

    useEffect(() => {
        fetch("https://api-7xmcazxjaa-uc.a.run.app/bird")
            .then(response => response.json())
            .then(items => {
                setBirds(items);
                setShow(false);
            });
    }, []);

    if(show === true){
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );    }

    return <div>
        <h3>Just Birds</h3>
        <section id="card">
            {birds.map(bird => <MediaCard key={`bird_${bird.name}`} image={bird.image} name={bird.name} summary={bird.summary} info= {bird.info} />)}
        </section>
    </div>
}