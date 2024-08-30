import Hero from "./hero";
import About from "./about";
import Domaine from "./domain";
import Testimonials from "./temoignage";
import Team from "./team";
import ContactForm from "./contactform";
import Footer from "./footer";

export default function Main(){
    return(
        <div>
            <Hero/>
            <About/>
            <Domaine/>
            <Testimonials />
            <Team/>
            <ContactForm/>
        </div>
    );
}