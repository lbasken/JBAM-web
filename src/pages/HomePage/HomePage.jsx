import React from "react";
import "./HomePage.css";
import NewEnglandImage from "/src/assets/images/NewEngland.svg";

export default function HomePage() {
    return <div className="home-page">
        <img
            className="new-england-image"
            src={NewEnglandImage}
            alt="new england counties"
        />
    </div>
}