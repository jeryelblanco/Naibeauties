import './App.css';
import Header from './header';
import Services from './Services';
import Appoint from './Appoint';
import Footer from './Footer'
import Hairstyles from './Hairstyles';
import defaultCalendar from "./images/scheduledefault.JPG"
import { useState, useEffect} from 'react';
function App() {
const [availFile, setAvailFile] = useState("")


// useEffect(()=> {
//   fetch("http://127.0.0.1:5000/uploads")
//   .then(data => console.log(data))
// },[])



/*
useEffect(()=> {
  fetch("http://127.0.0.1:5000/image")
  .then(response => response.json())
  .then(data => setAvailFile(data[0].image))
  console.log("yoboly", availFile)
},[])

*/
  // fetch("http://127.0.0.1:5000/image")
  // .then(response => response.json())
  // .then(data => setAvailFile(data[0].image))
   // {
    // data.map(dataValues => {
    //   setAvailFile(dataValues.image)
    // })
  //   console.log(data) 
  // }
  
console.log("filey", availFile)
  return (
    <div className="App">
      <Header />
      <Hairstyles />
      <Services />
      <Appoint availFile = {availFile}/>
      <Footer setAvailFile = {setAvailFile} />

    </div>
  );
}


export default App;
