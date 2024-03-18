import './App.css';
import Header from './header';
import Services from './Services';
import Appoint from './Appoint';
import Footer from './Footer'
import Hairstyles from './Hairstyles';
import { useState } from 'react';
function App() {
  const [availFile, setAvailFile] = useState("https://m.media-amazon.com/images/I/81dNosrglaL._AC_UF894,1000_QL80_.jpg")
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
