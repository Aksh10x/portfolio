import Navbar from './components/navbar'
import Hero from './components/heroSection'
import Work from './components/myWork'
import MySkills from './components/mySkills'
import ContactMe from './components/contactMe'

function App() {
  return (
    <div className='max-w-screen  w-full'>
      <Navbar />
      <Hero />
      <Work />
      <MySkills />
      <ContactMe />
    </div>
  )
}

export default App
