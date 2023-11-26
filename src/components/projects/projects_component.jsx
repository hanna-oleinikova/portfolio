import "./projects_style.scss";
import { Navigation } from "../navigation/nav_component.jsx";


export function ProjectsComponent() {
  return (
    <>
      <Navigation />
      <div className="project-container">
        <div className="project-box">
          <img className="project-screen" src="/projects/zuhause_screen.png" alt="Printscreen of project 'Zuhause'" />
          <div className="project-text">Project <span>Dein Zuhause</span>, created using HTML and SASS with the implementation of CSS Grid.</div>
        </div>
        
        <div className="project-box">
          <img className="project-screen" src="/projects/countries_bild.jpg" alt="Printscreen of project 'Countries'" />
          <div className="project-text">Project <span>Countries</span>, created with React Vite using a public APIs.</div>
        </div>

        
      </div>
    </>
  )
}