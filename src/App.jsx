import './App.css'
import { ContactsSection } from './components/ContactsSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      <Footer />
    </>
  )
}

export default App
