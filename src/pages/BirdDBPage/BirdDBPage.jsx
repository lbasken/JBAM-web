import React, {useEffect, useState} from "react";
import MediaCard from "/src/MediaCard.jsx";
import "./BirdDBPage.css";

export default function BirdDBPage() {

    const [birds, setBirds] = useState([]);

    useEffect(() => {
        fetch("https://api-7xmcazxjaa-uc.a.run.app/bird")
            .then(response => response.json())
            .then(items => {
                setBirds(items);
            });
    }, []);

    return <div>
        <h3>Just Birds</h3>
        <section id="card">
            {birds.map(bird => <MediaCard key={`bird_${bird.name}`} image={bird.image} name={bird.name} summary={bird.summary} info= {bird.info} />)}
            {/*<MediaCard image="https://www.allaboutbirds.org/guide/assets/photo/302473191-480px.jpg" name="Cute Bird 1" summary="This is a summary." info="https://www.wikipedia.org/" />*/}
        </section>
    </div>

}