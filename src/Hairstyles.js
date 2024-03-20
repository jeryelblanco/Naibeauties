import Video from './images/video0.mp4'
import { useRef } from 'react'
import pin from "./images/pin.png"

function Hairstyles(){

// const headerText = document.querySelector(".Hairstyles")
// console.log(headerText)

const pinStyle = {
width: "50px",
}



return(
    <div className = 'Hairstyles'>
 <h2 style = {{textDecoration: "underline"}}>Top quality braiding</h2>  
<h2>located in the Bronx  <img style = {pinStyle} src = {pin}></img></h2>
<video playsInline = "true" preload = "metadata" width="800" height="500" autoPlay = "true" muted >
<source src = {Video} type = "video/mp4"></source>
    
</video>

    </div>
)
}

export default Hairstyles