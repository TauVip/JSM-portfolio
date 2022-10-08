import Navbar from './components/Navbar'
import About from './container/About'
import Footer from './container/Footer'
import Header from './container/Header'
import Skills from './container/Skills'
import Testimonial from './container/Testimonial'
import Work from './container/Work'
import './App.scss'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}
export default App
