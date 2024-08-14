import { Navigation } from "../navigation/nav_component.jsx";
import { Link } from 'react-router-dom';
import "./about_style.scss";

export function AboutComponent() {
  return (
    <>
      <div className="about-container">

        <div className="about-text">
          <p> I came to IT quite recently, knowing nothing about this profession, without having written a single line of code before starting the course with DCI. But now I am completely in love with web development. I am absolutely sure that I still have a long way to go to become a professional, but I am determined to do this because this is an incredibly interesting job.</p>
          <p> Over many years, I have gained experience in creating printed publications. I worked in a company that regularly published magazines and several books. In the respective department, I was the only employee. There, I gained extensive experience in organizing workflows and prioritizing tasks. I am confident that my previous professional background will be very beneficial in the IT industry, as many of these processes share similarities. A letter of recommendation from my boss, with whom I have worked for over 15 years, can be found in the <Link className="linkToDocuments" to={"/certificates"}>Documents</Link>.</p>
        </div>
      </div>
      <Navigation />
    </>
  )
}