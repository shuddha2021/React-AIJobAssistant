import React from "react";

// Remove the type for job objects
// Remove the type for props

// Keep the functional component as it is
function JobList(props) {
    // Destructure props
    const { jobs, onSelect } = props;

    // Return JSX
    return (
        <div className="job-list">
            <h2>Recommended Jobs</h2>
            <p>Apply to up to 10 recommended jobs per day with just one click.</p>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <p>${job.salary} / year</p>
                        <button onClick={() => onSelect(job)}>Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobList;
