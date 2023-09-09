import React from "react";
import MediaCard from "../../MediaCard.jsx";

export default function AndMoreDBPage() {
    return <div>
        <h3>... And More</h3>
        <section id="birds">
            <MediaCard image="https://www.umass.edu/sites/default/files/styles/large/public/legacy/inline-images/liatris_spicata_1.jpg?itok=n5GpJuoR" name="Cool Plant 1" summary="This is a summary." link="https://www.wikipedia.org/" />
            <MediaCard image="https://www.greenhousegrower.com/wp-content/uploads/2012/05/35094.jpg" name="Cool Plant 2" summary="This is another summary." link="https://www.wikipedia.org/"/>
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </section>
    </div>
}