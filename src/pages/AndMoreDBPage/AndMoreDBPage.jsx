import React, {useEffect, useState} from "react";
import MediaCard from "../../MediaCard.jsx";

export default function AndMoreDBPage() {

    const [andmore, setAndMore] = useState([]);

    useEffect(() => {
        fetch("https://api-7xmcazxjaa-uc.a.run.app/and-more")
            .then(response => response.json())
            .then(items => {
                setAndMore(items);
            });
    }, []);

    return <div>
        <h3>... And More</h3>
        <section id="card">
            {andmore.map(andmore => <MediaCard key={`andmore_${andmore.name}`} image={andmore.image} name={andmore.name} summary={andmore.summary} info= {andmore.info} />)}
        </section>
    </div>
}