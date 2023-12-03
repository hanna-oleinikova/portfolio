import { Navigation } from "../navigation/nav_component.jsx";
import { ZoomImg } from "../zoom/zoom_img_component.jsx";
import "./about_style.scss";
import Page1 from "../../assets/Page-1.jpg";
import Page2 from "../../assets/Page-2.jpg";
import Letter from "../../assets/Empfelungsbrief.pdf";


export function AboutComponent() {
  return (
    <>
      <div className="about-container">
      <div className="fon-top"></div>
      <div className="fon-bottom"></div>
        <div className="about-text">
          <p> I came to IT quite recently, knowing nothing about this profession, without having written a single line of code before starting the course with DCI. But now I am completely in love with web development. I am absolutely sure that I still have a long way to go to become a professional, but I am determined to do this because this is an incredibly interesting job.</p>
          <p> Over many years, I have gained experience in creating printed publications. I worked in a company that regularly published magazines and several books. In the respective department, I was the only employee. There, I gained extensive experience in organizing workflows and prioritizing tasks. I am confident that my previous professional background will be very beneficial in the IT industry, as many of these processes share similarities. At this point, I would like to share a recommendation from my former supervisor, in which he details the tasks I successfully handled.
          </p>
          <a href={Letter} target="_blank" rel="noreferrer"><p>Open letter of recommendation in new window</p></a>
        </div>
        <div className="letter-pages">
          <ZoomImg src={Page1} alt="letter page 1" className="page"/>
          <ZoomImg src={Page2} alt="letter page 2" className="page"/>
        </div>
      </div>
      <Navigation />
    </>
  )
}