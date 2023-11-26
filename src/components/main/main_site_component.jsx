import './main_site_style.scss';
import PhotoMe from '../../assets/photo_me.jpg';
import { Navigation } from '../navigation/nav_component.jsx';


export function MainSiteComponent() {
  return(
    <>
      <div className='main-container main-page'>
        <Navigation />
        <div className='central-block'>
          <p>Hi! My name is Hanna</ p>
          <img className='my-photo' src={PhotoMe} alt="My photo"  />
          <p>and I am a beginning web developer.</p>
        </div>
      </div>
    </>
  )
}