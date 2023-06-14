import { BrowserRouter } from "react-router-dom";
import {Hero, Login, Navbar, Pricing, Signup, Intro} from "./components"

const App = () => {

  return (
    <BrowserRouter>
     <div className = "relative z-0 bg-gradient-to-t from-gradient2 to-gradient1">
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <Intro/>
      </div>
    </BrowserRouter>
  )
}

export default App
