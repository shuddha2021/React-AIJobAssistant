// src/MaterialDetails.js

import React from "react";
import "./MaterialDetails.css";

function MaterialDetails({ material }) {
    return (
        <div className="MaterialDetails">
            <h2>{material.type}</h2>
            <h3>{material.title}</h3>
            <p>{material.content}</p>
        </div>
    );
}

export default MaterialDetails;