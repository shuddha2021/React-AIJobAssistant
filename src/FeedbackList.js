// src/FeedbackList.js

import React from "react";

function FeedbackList(props) {
    // Destructure props
    const { feedback, selectedFeedback, handleFeedbackSelect } = props;

    return (
        <div className="feedback-list">
            <h4>Feedback List</h4>
            <ul>
                {feedback.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleFeedbackSelect(item)}
                        // Use conditional rendering to highlight selected feedback item
                        style={
                            selectedFeedback &&
                            selectedFeedback.id === item.id
                                ? { backgroundColor: "lightblue" }
                                : {}
                        }
                    >
                        {item.expert} - {item.rating} stars
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeedbackList;