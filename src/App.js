import './App.css';
import Header from './header';
import Services from './Services';
import Appoint from './Appoint';
import Footer from './Footer'
import Hairstyles from './Hairstyles';
import defaultCalendar from "./images/scheduledefault.JPG"
import { useState } from 'react';
function App() {
  const [availFile, setAvailFile] = useState({defaultCalendar})
  console.log(typeof(availFile))
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
