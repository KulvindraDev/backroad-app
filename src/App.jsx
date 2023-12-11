import About from "./Components/About"
import "./App.css"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Services from "./Components/Services"
import Tours from "./Components/Tours"
import Footer from "./Components/Footer"
import reactLogo from './assets/react.svg'

function App() {

  return (
    <>
<Navbar/>
<Hero/>
<About/>
<Services/>
<Tours/>
<Footer/>
<script src="./js/app.js"></script>
    </>
  )
}

export default App
