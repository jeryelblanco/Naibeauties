import './App.css';
import Header from './header';
import Services from './Services';
import Appoint from './Appoint';
import Footer from './Footer'
import Hairstyles from './Hairstyles';
import Prices from './Prices';
import { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router';
import Nav from './Nav'
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
  
//console.log("filey", availFile)
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path = "/">
      <Header />
      <Hairstyles />
      <Services />
      <Appoint availFile = {availFile}/>
      <Footer setAvailFile = {setAvailFile} />
      </Route>
      <Route exact path = "/prices">
        <Prices />
      </Route>
      </Switch>
    </div>
  );
}


export default App;
