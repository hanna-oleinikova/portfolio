import { Link } from 'react-router-dom';
import { useState } from "react";
import "./about_style.scss";
import { Button } from "../buttons/button_component.jsx";
import { Navigation } from "../navigation/nav_component.jsx";

export function AboutComponent() {
  const [language, setLanguage] = useState('eng')

  const handleLanguageChange = (nameOfLanguage) => {
    setLanguage(nameOfLanguage)
  }

  const activeStyle = {
    boxShadow: "inset 4px 4px 8px #cbc0b8, inset -4px -4px 8px #fffff8"
  };

  return (
    <>
      <Navigation />
      <div className="about-container">
        <div className="buttons-container">
        <Button 
          className="language-button" 
          text='English' 
          width='100px'
          higth='30px'
          onClick={() => handleLanguageChange('eng')} 
          isActiveStyle={language === 'eng' ? activeStyle : {}} 
        />

        <Button 
          className="language-button" 
          text='Deutsch' 
          width='100px'
          higth='30px'
          onClick={() => handleLanguageChange('de')} 
          isActiveStyle={language === 'de' ? activeStyle : {}} 
        />

        </div>
        {language === 'eng' ?
        <div className="about-text">
          <p> I came to IT quite recently, knowing nothing about this profession, without having written a single line of code before starting the course with DCI. But now I am completely in love with web development. I am absolutely sure that I still have a long way to go to become a professional, but I am determined to do this because this is an incredibly interesting job.</p>
          <p> Over many years, I have gained experience in creating printed publications. I worked in a company that regularly published magazines and several books. In the respective department, I was the only employee. There, I gained extensive experience in organizing workflows and prioritizing tasks. I am confident that my previous professional background will be very beneficial in the IT industry, as many of these processes share similarities. A letter of recommendation from my boss, with whom I have worked for over 15 years, can be found in the <Link className="linkToDocuments" to={"/certificates"}>Documents</Link>.</p>
        </div> 
        : 
        <div className="about-text">
          <p> Ich bin erst vor kurzem in die IT-Branche eingestiegen, ohne vorher irgendetwas über diesen Beruf zu wissen und ohne jemals eine einzige Zeile Code geschrieben zu haben, bevor ich den Kurs bei der DCI begann. Aber jetzt bin ich vollkommen verliebt in die Webentwicklung. Ich bin mir absolut sicher, dass ich noch einen langen Weg vor mir habe, um ein Profi zu werden, aber ich bin fest entschlossen, dies zu schaffen, weil es eine unglaublich spannende Arbeit ist.</p>
          <p> Über viele Jahre hinweg habe ich Erfahrung in der Erstellung von Druckerzeugnissen gesammelt. Ich arbeitete in einem Unternehmen, das regelmäßig Zeitschriften und mehrere Bücher veröffentlichte. In der entsprechenden Abteilung war ich die einzige Mitarbeiterin. Dort habe ich umfassende Erfahrung in der Organisation von Arbeitsabläufen und der Priorisierung von Aufgaben gesammelt. Ich bin überzeugt, dass mein bisheriger beruflicher Hintergrund in der IT-Branche sehr nützlich sein wird, da viele dieser Prozesse Ähnlichkeiten aufweisen. Ein Empfehlungsschreiben meines Chefs, mit dem ich über 15 Jahre zusammengearbeitet habe, finden Sie in den <Link className="linkToDocuments" to={"/certificates"}>Documents</Link>.</p>
        </div>}
      </div>
    </>
  )
}