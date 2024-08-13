import "./projects_style.scss";
import { Navigation } from "../navigation/nav_component.jsx";

export function ProjectsComponent() {


  return (
    <>
      <Navigation />
      <div className="project-container">
       
      <div className="project-box-3">
          <a  href="https://store-ten-kohl.vercel.app/" 
              target="_blank" 
              rel="noreferrer">
            <img  className="project-screen-store" 
                  src="/projects/store_screen.png" 
                  alt="Printscreen of project 'Store'"/>
          </a>
          <p className="project-text">Project <span>Store</span> is still under development. You can get acquainted with the project. The "favorites" and "shopping cart" sections are not ready yet 🙃 </p>
        </div>   

        
        <div className="project-box-2">
          <a  href="https://countries-github-io.vercel.app" 
              target="_blank" 
              rel="noreferrer">
            <img  className="project-screen-countries" 
                  src="/projects/countries_bild.jpg" 
                  alt="Printscreen of project 'Countries'"/>
          </a>
          <p className="project-text">Project <span>Countries</span>, created with React Vite using a public APIs.</p>
        </div>   

        <div className="project-box-1">
          <a  href="https://zuhause-jade.vercel.app/" 
              target="_blank" 
              rel="noreferrer">
            <img  className="project-screen-zuhause" 
                  src="/projects/zuhause_screen.png" 
                  alt="Printscreen of project 'Zuhause'"/>
          </a>
          <p className="project-text">Project <span>Dein Zuhause</span>, created using HTML and SASS with the implementation of CSS Grid.</p>
        </div>
      </div>
    </>
  )
}