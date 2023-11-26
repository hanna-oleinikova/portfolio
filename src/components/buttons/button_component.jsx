import { Link } from 'react-router-dom';
import './button_style.scss';


export const Button = (props) => {
  const {to, position, top, right, bottom, left, transform, text, isActiveStyle} = props;
  const style = {position, top, right, bottom, left, transform, ...isActiveStyle};

  return(
    <>
      <Link to={to}>
      <button style={style}>{text}</button>
      </Link>
    </>
  )
}