import React from "react";
import MediaCard from "/src/MediaCard.jsx";
import "./BirdDBPage.css";

export default function BirdDBPage() {
    return <div>
        <h3>Just Birds</h3>
        <section id="birds">
            <MediaCard name="Cute Bird 1" />
            <MediaCard name="Cute Bird 2" />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </section>

    </div>
}