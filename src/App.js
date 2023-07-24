import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services";

import "./style/App.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/services.scss"
import "./style/mediaquery.scss"




function App() {
  return (
    <Router>
      <Header/>
      <Routes><Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
