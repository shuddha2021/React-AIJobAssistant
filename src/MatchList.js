// src/MatchList.js

import React from "react";
import "./MatchList.css";

function MatchList({ matches }) {
    return (
        <div className="MatchList">
            <h2>Your Perfect Matches</h2>
            <ul>
                {matches.map((match) => (
                    <li key={match.id}>
                        <h3>{match.company}</h3>
                        <p>{match.role}</p>
                        <p>{match.location}</p>
                        <p>Match score: {match.score}%</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MatchList;