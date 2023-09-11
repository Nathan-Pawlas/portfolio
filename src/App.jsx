import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Games, Hero, Navbar, Tech, Works, StarsCanvas } from './components';



const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div>
          <div className='bg-hero-glob1 bg-fill bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
        </div>
        <div>
          <div className='bg-hero-glob2 bg-fill bg-no-repeat bg-center'>
            <About />
          </div>
        </div>
        <div>
          <div className='bg-hero-glob3 bg-fill bg-no-repeat bg-center'>
            <Experience />
          </div>
        </div>
        <div>
          <div className='bg-hero-glob4 bg-fill bg-no-repeat bg-center'>
            <Tech />
          </div>
        </div>
        <Works />
        <Games />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas className='z-1'/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
