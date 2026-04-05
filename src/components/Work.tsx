import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      if (translateX < 0) translateX = 0; // Prevent reverse layout collision
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => "+=" + (translateX > 0 ? translateX : window.innerHeight),
        scrub: true,
        pin: true,
        pinSpacing: true,
        id: "work",
      },
    });

    if (translateX > 0) {
      timeline.to(".work-flex", {
        x: -translateX,
        duration: 40,
        delay: 0.2,
      });
    }
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "Netflix Data Dashboard",
              category: "Data Analysis 2026",
              tools: "Python, Pandas, Plotly, Streamlit, EDA",
              image: `${import.meta.env.BASE_URL}images/netflix_dash.png`,
              link: "https://lnkd.in/gj5kbbVt"
            },
            {
              title: "Diabetes Prediction Model",
              category: "Machine Learning 2026",
              tools: "Python, Pandas, Scikit-learn, EDA, Logistic Regression",
              image: `${import.meta.env.BASE_URL}images/diabetes.png`,
              link: "https://lnkd.in/dWJi_Nn2"
            },
            {
              title: "IMDb Data Extraction",
              category: "Web Scraping 2026",
              tools: "Python, Selenium, BeautifulSoup, Data Cleaning, EDA",
              image: `${import.meta.env.BASE_URL}images/IMDB_Logo.jpg`,
              link: "https://lnkd.in/gBrMyHYH"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
