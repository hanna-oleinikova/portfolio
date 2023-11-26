import { useEffect, useState } from "react";
import "./contacts_style.scss";
import { Navigation } from "../navigation/nav_component";


export function ContactComponent() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setMobileView(isMobileView);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      {mobileView ? (
        <div className="contact-container">
          <div className="blocks">
            <div className="icon-container">
              <a href="mailto:hanna.oleinikova@gmail.com"><img src="/contact/mail_icon.png" alt="Email icon"/></a>
              <div className="data-text" data-text="You can write to me how much you liked my project"></div>
            </div>
            
            <div className="icon-container">
              <a href="tel:+1234567890"><img src="/contact/phone_icon.png" alt="Phone icon"/></a>
              <div className="data-text" data-text="This is not true, I will not answer 24/7"></div>
            </div>
            
            <div className="icon-container">
              <a href=""><img src="/contact/post_icon.png" alt="Post icon"/></a>
              <div className="data-text" data-text="You can also send me a nice card"></div>
            </div>

            <div className="icon-container">
              <a href=""><img src="/contact/whatsapp_icon.png" alt="Whatsapp icon"/></a>
              <div className="data-text" data-text="And you can really write here 24/7"></div>
            </div>
            
            <div className="icon-container">
              <a href=""><img src="/contact/instagram_icon.png" alt="Instagram icon"/></a>
              <div className="data-text" data-text="Ups... My account is private"></div>
            </div>
            
            <div className="icon-container">
              <a href=""><img src="/contact/linkedin_icon.png" alt="Linkedin icon"/></a>
              <div className="data-text" data-text="I believe that someday there will be many projects here"></div>
            </div>
          </div>
      </div>
      ) : (
      <div className="contact-container">
        <div className="left">
          <div className="icon-container">
            <a href="mailto:hanna.oleinikova@gmail.com"><img src="/contact/mail_icon.png" alt="Mail icon"/></a>
            <div className="data-text" data-text="You can write to me how much you liked my project"></div>
          </div>
          
          <div className="icon-container">
            <a href="tel:+1234567890"><img src="/contact/phone_icon.png" alt="Phone icon"/></a>
            <div className="data-text" data-text="This is not true, I will not answer 24/7"></div>
          </div>
                    
          <div className="icon-container">
            <a href=""><img src="/contact/post_icon.png" alt="Post icon"/></a>            
            <div className="data-text" data-text="You can also send me a nice card"></div>  
          </div>
        </div>
        
        <div className="right">
          <div className="icon-container">
            <a href=""><img src="/contact/whatsapp_icon.png" alt="Whatsapp icon"/></a>
            <div className="data-text" data-text="And you can really write here 24/7"></div>
          </div>
                    
          <div className="icon-container">
            <a href=""><img src="/contact/instagram_icon.png" alt="Instagram icon"/></a>
            <div className="data-text" data-text="Ups... My account is private"></div>
          </div>
                    
          <div className="icon-container">
            <a href=""><img src="/contact/linkedin_icon.png" alt="Linkedin icon"/></a>
            <div className="data-text" data-text="I believe that someday there will be many projects here"></div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}