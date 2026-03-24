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
                <h4>B.Tech CSE (AI & ML)</h4>
                <h5>Goel Institute of Technology & Management</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              8.5 CGPA. Pursuing B.Tech in Computer Science with a focus on data analytics, programming, and applied problem-solving.
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Career;
