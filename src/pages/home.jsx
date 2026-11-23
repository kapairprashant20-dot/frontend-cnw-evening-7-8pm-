import About from './about'
import Hero from './hero'
import ProjectParent from "../components/Projects/ProjectParent";
import Contact from './Contact';

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <ProjectParent/>
        <Contact/>
    </div>
  )
}
export default Home