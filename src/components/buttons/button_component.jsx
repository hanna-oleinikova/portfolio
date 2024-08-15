import { Link } from 'react-router-dom';
import './button_style.scss';


export const Button = (props) => {
  const {to, position, top, right, bottom, left, transform, text, isActiveStyle, onClick, width, height} = props;
  const style = {position, top, right, bottom, left, transform, width, height, ...isActiveStyle};

  return(
    <>
      <Link to={to}>
      <button className="nav_button" style={style} onClick={onClick}>{text}</button>
      </Link>
    </>
  )
}