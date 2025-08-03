import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container" style={{marginTop: 60, maxWidth: 500}}>
      <h2>About Solution Desk</h2>
      <p>
        <b>Solution Desk</b> is a growing collection of powerful business tools for teams and individuals who value their time. Most tools require membership to access.
      </p>
      <p>
        <b>Questions, ideas, or feedback?</b> <br />
        Email: <a href="mailto:info@thesolutiondesk.ca">info@thesolutiondesk.ca</a>
      </p>
      <Link to="/" style={{color:"var(--accent)"}}>← Back to tools</Link>
    </div>
  );
}

export default About;
