import MLAI from "./ui/fitureProject/MLAI";
import Mobile from "./ui/fitureProject/Mobile";
import Other from "./ui/fitureProject/Other";

import Website from "./ui/fitureProject/Website";

export default function FitureProject() {
  return (
    <section
      className="section"
      id="projects"
      style={{ background: "var(--bg-secondary)" }}
    >
      <h2 className="section-title fade-in">[ Featured Projects ]</h2>
      <div className="project-category">
        <h3 className="project-heading">Website</h3>
        <Website />
      </div>
      <div className="project-category">
        <h3 className="project-heading">Mobile</h3>
        <Mobile />
      </div>
      <div className="project-category">
        <h3 className="project-heading">ML/AI</h3>
        <MLAI />
      </div>
      <div className="project-category">
        <h3 className="project-heading">Other</h3>
        <Other />
      </div>
    </section>
  );
}
