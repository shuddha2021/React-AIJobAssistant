// src/App.js

import React, { useState } from "react";
import "./App.css";
import JobList from "./JobList.js";
import JobDetails from "./JobDetails.js";
import MaterialList from "./MaterialList.js";
import MaterialDetails from "./MaterialDetails.js";
import MatchList from "./MatchList.js";
// Import FeedbackList and FeedbackDetails components
import FeedbackList from "./FeedbackList";
import FeedbackDetails from "./FeedbackDetails";

// Import the Chatbot component
import Chatbot from "./Chatbot";

function App() {
    const [showNextSteps, setShowNextSteps] = useState(false);

    const handleApplyNow = () => {
        setShowNextSteps(true);
    };

    // Define state variables for the selected job and the match percentage
    const [selectedJob, setSelectedJob] = useState(null);
    const [match, setMatch] = useState(0);

    // Define a function to handle job selection
    const handleJobSelect = (job) => {
        setSelectedJob(job); // Update state variable with selected job
        setMatch(Math.floor(Math.random() * 100) + 1); // Update state variable with random match percentage
    };

    // Define some dummy jobs as an array of objects
    const jobs = [
        {
            id: 1,
            title: "Web Developer",
            company: "ABC Inc.",
            location: "New York, NY",
            salary: 80000,
        },
        {
            id: 2,
            title: "Graphic Designer",
            company: "XYZ Ltd.",
            location: "Los Angeles, CA",
            salary: 60000,
        },
        {
            id: 3,
            title: "Data Analyst",
            company: "123 Corp.",
            location: "Chicago, IL",
            salary: 70000,
        },
    ];

    // Define state variables for the selected material and the show materials flag
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [showMaterials, setShowMaterials] = useState(false);

    // Define a function to handle generate materials button click
    const handleGenerateMaterials = () => {
        setShowMaterials(true);
    };

    // Define a function to handle material selection
    const handleMaterialSelect = (material) => {
        setSelectedMaterial(material); // Update state variable with selected material
    };

    // Define some dummy materials as an array of objects
    const materials = [
        {
            id: 1,
            type: "Cover Letter",
            title: "Web Developer at ABC Inc.",
            summary:
                "A cover letter for the web developer position at ABC Inc. that showcases my interest and skills in web development.",
            content:
                "Dear Hiring Manager,\n\nI'm a web developer with three years of experience in building websites using HTML, CSS, JavaScript, React, and other web technologies. I have worked on projects for clients such as XYZ Ltd. and ABC Inc.\n\nI'm impressed by the work that ABC Inc. does in creating web solutions for various clients. I would love to join your team and contribute to your projects with my skills and enthusiasm.\n\nI have attached my resume and portfolio for your review. Please let me know if you have any questions or would like to schedule an interview.\n\nThank you for your consideration.\n\nSincerely,\nK",
        },
        {
            id: 2,
            type: "Resume",
            title: "Web Developer",
            summary:
                "A resume that highlights my skills and experience as a web developer using HTML, CSS, JavaScript, React, and other web technologies.",
            content:
                "K\nWeb Developer\n(123)456-7890 | email@example.com | www.kportfolio.com\n\nSummary\nA web developer with three years of experience in building websites using HTML, CSS, JavaScript, React, and other web technologies. Skilled in working on both front-end and back-end development, as well as collaborating with other developers in a team environment.\n\nSkills\n- HTML, CSS, JavaScript, jQuery, Bootstrap\n- React, Redux, Next.js, Gatsby\n- Node.js, Express, MongoDB, Firebase\n- Git, GitHub, npm, webpack\n- Responsive design, accessibility, SEO\n\nExperience\nWeb Developer | XYZ Ltd. | Jan 2020 - Present\n- Built the front-end of a website for a graphic design company using React and Bootstrap\n- Implemented features such as a portfolio gallery, a contact form, and a testimonial slider\n- Optimized the website for performance, accessibility, and SEO\n- Collaborated with the back-end developer and the designer using agile methodologies and Git\n\nEducation\nBachelor of Science in Computer Science | ABC University | Sep 2016 - May 2020\n- Graduated with honors and a GPA of 3.8\n- Completed courses in web development, data structures, algorithms, databases, and software engineering\n\nPortfolio\nwww.kportfolio.com | A personal portfolio website showcasing my projects and skills",
        },
        {
            id: 3,
            type: "Portfolio",
            title: "Web Development Projects",
            summary:
                "A portfolio that showcases some of the web development projects that I have worked on or created using HTML, CSS, JavaScript, React, and other web technologies.",
            content:
                "Web Development Projects\n\nHere are some of the web development projects that I have worked on or created using HTML, CSS, JavaScript, React, and other web technologies. You can view the live demos and the source code by clicking on the links below.\n\nProject 1: Personal Portfolio Website\n- A personal portfolio website showcasing my projects and skills\n- Built with HTML, CSS, JavaScript, and Bootstrap\n- Live demo: www.kportfolio.com\n- Source code: https://github.com/kportfolio/kportfolio.github.io\n\nProject 2: Website for XYZ Ltd.\n- A website for XYZ Ltd., a graphic design company\n- Built with React and Bootstrap\n- Implemented features such as a portfolio gallery, a contact form, and a testimonial slider\n- Optimized for performance, accessibility, and SEO\n- Live demo: www.xyz.com\n- Source code: https://github.com/kportfolio/xyz-website",
        },
    ];


    // Create a new component for the "Apply to Recommended Jobs" section
    function ApplySection({ handleApplyNow }) {
        return (
            <section>
                <h2>Apply to Recommended Jobs</h2>
                <p>Apply to up to 10 recommended jobs per day with just one click.</p>
                <button onClick={handleApplyNow}>Apply Now</button>
            </section>
        );
    }

// Create a new component for the "Generate Personalized Application Materials" section
    function GenerateMaterialsSection({ handleGenerateMaterials }) {
        return (
            <section>
                <h2>Generate Personalized Application Materials</h2>
                <p>Generate customized cover letters, resumes, and portfolios for each job you apply to.</p>
                <button onClick={handleGenerateMaterials}>Generate Materials</button>
            </section>
        );
    }

// Create a new component for the "Find Your Perfect Matches" section
    function FindMatchesSection({ handleFindMatches }) {
        return (
            <section>
                <h2>Find Your Perfect Matches</h2>
                <p>Find out which companies and roles are the best fit for you based on your skills and preferences.</p>
                <button onClick={handleFindMatches}>Find Matches</button>
            </section>
        );
    }

// Create a new component for the "Get Expert Feedback and Advice" section
    function GetFeedbackSection({ handleGetFeedback }) {
        return (
            <section>
                <h2>Get Expert Feedback and Advice</h2>
                <p>Receive personalized feedback and advice from industry experts on your application materials and interview skills.</p>
                <button onClick={handleGetFeedback}>Get Feedback</button>
            </section>
        );
    }


    // Define some mock data for feedback items
    const feedback = [
        {
            id: 1,
            expert: "Lisa Chen",
            rating: 5,
            comment:
                "Excellent resume, you have a great balance of skills and experience as a web developer.",
            suggestions: [
                "Add a summary statement at the top of your resume to highlight your main qualifications and achievements.",
                "Use keywords from the job description to tailor your resume to each position you apply for.",
                "Include some metrics or results to quantify your impact on previous projects or employers.",
            ],
        },
        {
            id: 2,
            expert: "Mark Lee",
            rating: 4,
            comment:
                "Good portfolio, you have some impressive web development projects in your portfolio.",
            suggestions: [
                "Add more details about the projects you worked on, such as the tools, technologies, and challenges involved.",
                "Include some testimonials or feedback from your clients or employers.",
                "Create a personal brand and logo for yourself.",
            ],
        },
        {
            id: 3,
            expert: "Anna Smith",
            rating: 3,
            comment:
                "Your interview skills are decent, but you need to improve your confidence and communication.",
            suggestions: [
                "Research the company and the role before the interview.",
                "Prepare some questions to ask the interviewer at the end.",
                "Practice answering common interview questions with a friend or a mentor.",
            ],
        },
    ];


    // Define state variables for the selected feedback item
    const [selectedFeedback, setSelectedFeedback] = useState(null);

// Define a function to handle feedback selection
    const handleFeedbackSelect = (item) => {
        setSelectedFeedback(item); // Update state variable with selected feedback item
    };


    // Define state variables for the show matches flag and the matches array
    const [showMatches, setShowMatches] = useState(false);
    const [matches, setMatches] = useState([]);

    // Define a function to handle find matches button click
    const handleFindMatches = () => {
        setShowMatches(true);
        setMatches(generateMatches()); // Generate some random matches
    };

    const [showFeedback, setShowFeedback] = useState(false);

// Define a function to handle feedback button click
    const handleGetFeedback = () => {
        setShowFeedback(true);
    };

    // Define a function to generate some random matches
    const generateMatches = () => {
        // Define some dummy companies as an array of objects
        const companies = [
            {
                id: 1,
                name: "ABC Inc.",
                location: "New York, NY",
            },
            {
                id: 2,
                name: "XYZ Ltd.",
                location: "Los Angeles, CA",
            },
            {
                id: 3,
                name: "123 Corp.",
                location: "Chicago, IL",
            },
        ];

        // Define some dummy roles as an array of objects
        const roles = [
            {
                id: 1,
                title: "Web Developer",
            },
            {
                id: 2,
                title: "Graphic Designer",
            },
            {
                id: 3,
                title: "Data Analyst",
            },
        ];

        // Define an empty array to store the matches
        let matches = [];

        // Loop through the companies and roles arrays and create a match object for each combination
        for (let i = 0; i < companies.length; i++) {
            for (let j = 0; j < roles.length; j++) {
                // Create a match object with the company id, name, location, role id, title, and a random score between 1 and 100
                let match = {
                    id: i * roles.length + j + 1,
                    company: companies[i].name,
                    location: companies[i].location,
                    role: roles[j].title,
                    score: Math.floor(Math.random() * 100) + 1,
                };

                // Push the match object to the matches array
                matches.push(match);
            }
        }

        // Return the matches array
        return matches;
    };

    return (
        <div className="App">
            <header>
                <h1>Name</h1>
            </header>
            <main>
                <ApplySection handleApplyNow={handleApplyNow} />
                {showNextSteps && <JobList jobs={jobs} handleJobSelect={handleJobSelect} />}
                {selectedJob && <JobDetails job={selectedJob} match={match} />}
                <GenerateMaterialsSection handleGenerateMaterials={handleGenerateMaterials} />
                {showMaterials && <MaterialList materials={materials} handleMaterialSelect={handleMaterialSelect} />}
                {selectedMaterial && <MaterialDetails material={selectedMaterial} />}
                <FindMatchesSection handleFindMatches={handleFindMatches} />
                {showMatches && <MatchList matches={matches} />}
                <GetFeedbackSection handleGetFeedback={handleGetFeedback} />
                {showFeedback && (
                    <>
                        <FeedbackList
                            feedback={feedback}
                            selectedFeedback={selectedFeedback}
                            handleFeedbackSelect={handleFeedbackSelect}
                        />
                        {selectedFeedback && (
                            <FeedbackDetails feedback={selectedFeedback} />
                        )}
                    </>
                )}
                {/* Add the Chatbot component here */}
                <Chatbot />
            </main>
        </div>
    );

}

export default App;
