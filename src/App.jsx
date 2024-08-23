import { Header } from './components/Header';
import { Hero } from './components/home/Hero';
import { Services } from './components/home/Services';
import { Projects } from './components/home/Projects';
import { Slide } from './components/home/Slide';
import { About } from './components/home/About';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Slide />
            <Services />
            <Projects />
            <About />
        </>
    );
}

export default App;
