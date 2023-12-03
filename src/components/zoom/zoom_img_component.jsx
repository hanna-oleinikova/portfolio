import { useState } from "react";
import "./zoom_img_style.scss";

export function ZoomImg(props) {
  const {src, alt, className} = props;
  const [zoomImg, setZoomImg] = useState(false);
  const handleZoom = () => {
    setZoomImg(!zoomImg)
  };

  return (
    <>
      <div  className={`image-container ${className} ${zoomImg ? "zoomed" : ""}`} 
            onClick={handleZoom}>
        <img  src={src} 
              alt={alt} 
              className={className}/>
      </div>
    </>
  )
}