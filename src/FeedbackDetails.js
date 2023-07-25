// src/FeedbackDetails.js

import React from "react";

function FeedbackDetails(props) {
    // Destructure props
    const { feedback } = props;

    return (
        <div className="feedback-details">
            <h4>Feedback Details</h4>
            <p>
                Expert: {feedback.expert}
                <br />
                Rating:{" "}
                {/* Use star icon or emoji to display rating */}
                {"⭐".repeat(feedback.rating)}
                <br />
                Comment: {feedback.comment}
            </p>
            <p>Suggestions:</p>
            <ol>
                {feedback.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ol>
        </div>
    );
}

export default FeedbackDetails;
