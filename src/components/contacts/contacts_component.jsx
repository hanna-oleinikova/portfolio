import { useEffect } from "react";
import "./contacts_style.scss";
import { Navigation } from "../navigation/nav_component";

export function ContactComponent() {
  useEffect(() => {
    const contactIcons = document.querySelectorAll(".icon-container");

    contactIcons.forEach((icon) => {
      const textDiv = icon.querySelector("div[data-text]"); 
      const text = textDiv.getAttribute("data-text");
      let indexLetter = 0;

      function typeText() {
        if (indexLetter < text.length) {
          textDiv.textContent += text.charAt(indexLetter);
          indexLetter++;
          setTimeout(typeText, 50);
        }
      }

      icon.querySelector("img").addEventListener("mouseenter", () => {
        if (!icon.classList.contains("typing")) {
          icon.classList.add("typing");
          typeText();
        }
      });
    });
  });

  return (
    <>
      <Navigation />

      <div className="contact-container">
        <div className="left">
          <div className="icon-container">
            <a href="mailto:hanna.oleinikova@gmail.com"><img src="/contact/mail_icon.png" alt="E-Mail icon"/></a>
            <div className="data-text" data-text="I respond promptly to email inquiries"></div>
          </div>
                    
          <div className="icon-container">
            <a href="https://www.google.com/maps/place/14480+Potsdam,+Germany" target="_blank" rel="noreferrer"><img src="/contact/post_icon.png" alt="Post icon"/></a>            
            <div className="data-text" data-text="My habitat. Comfort zone is within a radius of 25-30 km 😁"></div>  
          </div>
        </div>
        
        <div className="right">  
          <div className="icon-container">
            <a href="https://github.com/hanna-oleinikova" target="_blank" rel="noreferrer"><img src="/contact/github_icon.png" alt="GitHub icon"/></a>
            <div className="data-text" data-text="Feel free to come in, you can keep your shoes on 🙂"></div>
          </div>
                    
          <div className="icon-container">
          <a href="https://www.linkedin.com/in/hanna-oleinikova-389727298" target="_blank" rel="noreferrer"><img src="/contact/linkedin_icon.png" alt="Linkedin icon"/></a>
            <div className="data-text" data-text="Hier always open... to new opportunities and embrace professional challenges"></div>
          </div>
        </div>
      </div>
    </>
  )
}