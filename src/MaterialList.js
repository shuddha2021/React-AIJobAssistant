// src/MaterialList.js

import React from "react";
import "./MaterialList.css";

function MaterialList({ materials, handleMaterialSelect }) {
    return (
        <div className="MaterialList">
            <h2>Generated Materials for You</h2>
            <ul>
                {materials.map((material) => (
                    <li key={material.id} onClick={() => handleMaterialSelect(material)}>
                        <h3>{material.type}</h3>
                        <p>{material.title}</p>
                        <p>{material.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MaterialList;