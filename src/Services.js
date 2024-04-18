import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import image from './images/image0.jpeg'
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg'
import image7 from './images/image7.jpeg'
import { useEffect, useState, useRef } from 'react';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';






// This is for the image caption (options #1, etc.)
const spanStyle = {
    left: '50%',
    padding: '10px',
    background: 'rgba(255, 2555, 255, 0.5)',
    color: '#000000',
    display: "none"
  }
  //This is the div #slide
  const divStyle = {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center'

    
  }

  


  // This is for the servDiv which is a the list of services
  const servDescription = {

    width: '100%',
    height: '100%'
   // justifyContent: 'center'
    // float: 'right',

  }
  const slideImages = [
    {
      url: image7,
      caption: 'Option #1',
      description1: ' $15 deposit required',
      description2: 'Schedule an appointment below!',
    },
    {
      url: image6,
      caption: 'Option #2',
      description1: 'Knotless Braids',
      description2: 'different styles',
    },
    {
      url: image5,
      caption: 'Option #3',
      description1: 'Cornrows',
      description2: '& More',
    },
    {
      url: image1,
      caption: 'Option #4',
      description1: 'Nai\'s Gloss',
      description2: 'Different flavors',
    },
    {
      url: image,
      caption: 'Option #5',
      description1: 'Wide variety',
      description2: 'Visit my IG page for more!',
    }
    // {
    //   url: image5,
    //   caption: 'Option #6',
    //   description1: 'Deposit REQUIRED\n\nto hold appointment',
    // },
    // {
    //   url: image6,
    //   caption: 'Option #7',
    //   description1: 'Schedule your appointment now',
    //   description2: 'LIMITED availability',
    // },
    // {
    //   url: image7,
    //   caption: 'Option #8',
    //   description1: 'Elvevate your style',
    //   description2: 'Visit my IG page below',
    // }
  ];


/*
  let x = window.matchMedia("(max-width: 812px)")
  let servDiv = document.getElementById("servDiv")
  let servBox = document.querySelector(".Services")
  function mediaChange(x){
    if (x.matches){
      divStyle.width = '100%'
      // divStyle.flexDirection = 'row'
      // divStyle.display = "flexbox"
      servDescription.left = ''
      servDescription.width = '100%'
      // servDescription.position = ''
      spanStyle.left = "0"
      // servBox.append(servDiv)
    }
  }

  mediaChange(x)
  */
 // Creating the css adjustment for larger screens (would love to do it in css but the javascript css "divStyle" is overwriting the div)



function Services(){


    //this state is used to move the list div according to the boolean
    const [show, setShow] = useState(false)
    //this state is to store the size of the window
    const [size, setSize] = useState(window.innerWidth)

// this useEffect is for the initial render
// without this my event listner will only get activated once I resize the page
useEffect(()=>{
  if(size > 800){
    setShow(true)
    divStyle.backgroundSize = "50% 100%"
    divStyle.backgroundPosition = ""
  }
},[])
//console.log(size)

//this commented line of code is what I initizally was going to use for the window rezising
  //   let x = window.matchMedia("screen and (min-width: 800px")

//------------------------------------------------------

//this event listner is activated each time the window is rezised

    window.addEventListener('resize', event => {
      //here we set the state to the current size of the page
      setSize(window.innerWidth)
      //if the screen size is larger than 800 px lets run this
      if (size>800){
        setShow(true)
        divStyle.backgroundSize = "50% 100%"
        divStyle.backgroundPosition = ""
   
        }
        else{
         setShow(false)
         divStyle.backgroundSize = "100%, 100%"
         divStyle. backgroundPosition = "center"
 
        }
       })

      // console.log(size)
///-------------------------------------------------------------


    // function mediaChange(x){
    //  if (x.matches){
    //  setShow(true)
    //  divStyle.backgroundSize = "50% 100%"
    //  divStyle.backgroundPosition = ""
    // console.log(x)

    //  }
    //  else{
    //   setShow(false)
    //  }
    // }
    // here im setting the state and with the useEffect hook it'll render everytime the state is updated (so that my element are detected at first render)
    //setIsTrue(true)

    //console.log(servDiv)
   // console.log(show)
    //console.log(x)

  
    //console.log(myRef)


// to achieve my functionality I will create a boolean to change element depending on window size






    return(
    <div className='Services'>
        <h2>EXPLORE HAIRSTYLES & MORE!</h2>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className= "servBox"  key={index}>
              <div id = "slide" style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, 'backgroundRepeat': 'no-repeat'}}>
                <span id = "caption" style={spanStyle}>{slideImage.caption}</span>
               { //<div id = "emptyDiv">hellurr</div>
               }
               {show? 
                <div id = "servDiv" >
                    <ul id = "servList">
                        <li>{slideImage.description1}</li><br></br>
                        <li id = "li1">{slideImage.description2}</li><br></br>

                    </ul>
                </div>: null

                }
              </div>
              { show? null:
              <div id = "servDiv" >
                    <ul id = "servList">
                        <li>{slideImage.description1}</li><br></br>
                        <li id = "li1">{slideImage.description2}</li><br></br>
          

                    </ul>
                </div>
               }
            </div>
          ))} 
        </Slide>
    </div>
    )

    
}
    export default Services