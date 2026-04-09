import { useRef, useState, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const baseProjects = [
  {
    title: "Netflix Data Dashboard",
    category: "Data Analysis 2026",
    tools: "Python, Pandas, Plotly, Streamlit, EDA",
    image: `${import.meta.env.BASE_URL}images/netflix_dash.png`,
    link: "https://netflix-dashboard-prakhar.streamlit.app/"
  },
  {
    title: "Diabetes Prediction Model",
    category: "Machine Learning 2026",
    tools: "Python, Pandas, Scikit-learn, EDA, Logistic Regression",
    image: `${import.meta.env.BASE_URL}images/diabetes.png`,
    link: "https://github.com/iPrakharRai/diabetes-prediction-ml"
  },
  {
    title: "IMDb Data Extraction",
    category: "Web Scraping 2026",
    tools: "Python, Selenium, BeautifulSoup, Data Cleaning, EDA",
    image: `${import.meta.env.BASE_URL}images/IMDB_Logo.jpg`,
    link: "https://www.kaggle.com/datasets/lucifer1819/imdb-top-250-movies-clean-dataset"
  },
  {
    title: "IPL 2024 Dataset",
    category: "Data Analysis 2026",
    tools: "Python, Pandas, Plotly, Data Cleaning, EDA",
    image: `${import.meta.env.BASE_URL}images/ipl.png`,
    link: "https://www.kaggle.com/datasets/lucifer1819/ipl-2024-match-dataset/data"
  },
  {
    title: "Car Price Prediction Dashboard",
    category: "Machine Learning Project 2026",
    tools: "Python, Pandas, Scikit-learn, Streamlit, EDA, Machine Learning",
    image: `${import.meta.env.BASE_URL}images/car_price_predict_dash.png`,
    link: "https://car-price-prediction-dashboard-prakhar.streamlit.app/"
  }
];

const projects = [...baseProjects, ...baseProjects, ...baseProjects]; // Loop to create infinite illusion

const Work = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    let animationId: number;
    const scroll = () => {
      // Auto scroll if not interacting
      if (sliderRef.current && !isHovered && !isDragging) {
        sliderRef.current.scrollLeft += 0.8;
        
        // Seamless loop reset
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth * (2 / 3)) {
          sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 3;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };
  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container" style={{ position: "relative" }}>
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
        </div>
        
        <div 
          className="invisible-arrow left-arrow" 
          onClick={slideLeft}
          title="Slide Left"
        ></div>
        <div 
          className="invisible-arrow right-arrow" 
          onClick={slideRight}
          title="Slide Right"
        ></div>

        <div 
          className={`work-flex ${isDragging ? 'dragging' : ''}`} 
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); handleMouseLeave(); }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{(index % baseProjects.length) + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div style={{ marginTop: "20px" }}>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      color: "var(--accentColor)", 
                      textDecoration: "none", 
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px"
                    }}
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
