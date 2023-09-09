import React from "react";
import MediaCard from "/src/MediaCard.jsx";
import "./BirdDBPage.css";

export default function BirdDBPage() {
    return <div>
        <h3>Just Birds</h3>
        <section id="birds">
            <MediaCard image="https://www.allaboutbirds.org/guide/assets/photo/302473191-480px.jpg" name="Cute Bird 1" summary="This is a summary." link="https://www.wikipedia.org/" />
            <MediaCard image="https://images.saymedia-content.com/.image/t_share/MTc0NDczNTcwNjI4NDEyNzc2/common-types-of-backyard-birds-in-the-northeast.jpg" name="Cute Bird 2" summary="This is another summary." link="https://www.wikipedia.org/"/>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </section>
    </div>
}