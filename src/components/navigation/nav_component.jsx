import { useLocation } from 'react-router';
import { Button } from '../buttons/button_component.jsx';
import './nav_style.scss';


export function Navigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const activeStyle = {
        boxShadow: "inset 4px 4px 8px #cbc0b8, inset -4px -4px 8px #fffff8"
      };

  return(
    <>
      <Button to={"/about"} 
                text="About me" 
                position="absolute" 
                left="2em" 
                top="2em"
                isActiveStyle={isActive("/about") ? activeStyle : {}}/>
        <Button to={"/"} 
                text="Home" 
                position="absolute"
                top="2em"
                transform="translate(-50%, 0)"
                left="50%"
                isActiveStyle={isActive("/") ? activeStyle : {}}/>
        <Button to={"/projects"}
                text="Projects" 
                position="absolute" 
                top="2em"
                right="2em" 
                isActiveStyle={isActive("/projects") ? activeStyle : {}}/>
        <Button to={"/certificates"}
                text="Certificates" 
                position="absolute" 
                right="2em"
                bottom="2em" 
                isActiveStyle={isActive("/certificates") ? activeStyle : {}}/>
        <Button to={"/contacts"}
                text="Contacts"  
                position="absolute" 
                bottom="2em" 
                left="2em"
                isActiveStyle={isActive("/contacts") ? activeStyle : {}} />
    </>
  )
}
