import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI & ML) - 8.5 CGPA</h4>
                <h5>Dr. A.P.J. Abdul Kalam Technical University</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science & Engineering (AI & ML) with a focus on data analysis, machine learning, and programming.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
