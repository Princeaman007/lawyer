import About from "./about";
import ContactForm from "./contactform";
import Domaine from "./domain";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";


export default function Propo(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Domaine/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}