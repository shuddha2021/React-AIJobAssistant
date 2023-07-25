import React from "react";

// Remove the type for job objects
// Remove the type for props

// Keep the functional component as it is
function JobDetails(props) {
    // Destructure props
    const { job, match } = props;

    // Return JSX
    return (
        <div className="job-details">
            <h2>Next Steps</h2>
            <p>Follow these steps to complete your job application:</p>
            <ol className="centered-ol">
                <li>Review the selected job and its description.</li>
                <li>Customize your application materials (cover letter, resume, and portfolio) for the job.</li>
                <li>Submit your application through the provided application link.</li>
                <li>Keep track of your application and monitor its progress.</li>
            </ol>
            <div className="selected-job">
                <h3>{job.title}</h3>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <p>${job.salary} / year</p>
                <p>Based on your profile, we think this is a good match for you.</p>
                <p>Your match percentage is {match}%.</p>
                <a href="#">View Application Link</a>
            </div>
        </div>
    );
}

export default JobDetails;
