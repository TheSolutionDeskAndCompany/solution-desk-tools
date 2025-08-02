import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container" style={{marginTop: 60, maxWidth: 500}}>
      <h2>About Solution Desk</h2>
      <p>
        <b>Solution Desk</b> is a free resource built by Amber, for anyone wanting easy access to high-quality Six Sigma tools online—no downloads, no paywalls, just results. 
      </p>
      <p>
        <b>Questions, ideas, or feedback?</b> <br />
        Email: <a href="mailto:amber@thesolutiondesk.ca">amber@thesolutiondesk.ca</a>
      </p>
      <Link to="/" style={{color:"var(--accent)"}}>← Back to tools</Link>
    </div>
  );
}

export default About;
