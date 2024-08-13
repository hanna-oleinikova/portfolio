import { Navigation } from "../navigation/nav_component.jsx";
import "./certificates_style.scss";


export function CertificatesComponent() {
  return (
    <>
      <Navigation />
      <div className="container-docs">
        <a href="/docs/Hanna_Oleinikova_Lebenslauf.pdf" target="_blank" rel="noreferrer" className="link-docs">Lebenslauf</a>
        <a href="/docs/Hanna_Oleinikova_Empfelungsbrief.pdf" target="_blank" rel="noreferrer" className="link-docs">Empfelungsbrief</a>
        <a href="/docs/Hanna_Oleinikova_Zertifikat_DCI.pdf" target="_blank" rel="noreferrer" className="link-docs">Certificate "Weiterbildung zum/zur Web- und Softwareentwickler/-in"</a>
        <a href="/docs/Hanna_Oleinikova_Deutsch_B2.jpg" target="_blank" rel="noreferrer" className="link-docs">Certificate "Deutsch-Test für den Beruf B2"</a>
        <a href="/docs/Hanna_Oleinikova_Linguaskill_Test.pdf" target="_blank" rel="noreferrer" className="link-docs">"Cambridge English Test"</a>
        <a href="/docs/Hanna_Oleinikova_Anerkennung.jpg" target="_blank" rel="noreferrer" className="link-docs">"Zeugnisbewertung für ausländische Hochschulqualifikationen"</a>
      </div>
    </>
  )
}