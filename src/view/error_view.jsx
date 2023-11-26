import { Button } from "../components/buttons/button_component";


export function ErrorView() {
  return (
    <>
    <h3 style={{position: "absolute", 
              left: "50%", 
              top: "50%", 
              transform: "translate(-50%, -50%)" }}
              >There is nothing here</h3>
      <Button to={"/"} 
              text="Home page"
              position="absolute" 
              left="50%" 
              top="2em" 
              transform="translate(-50%, 0)"  />
    </>
  )
}