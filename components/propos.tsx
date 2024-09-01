import About from "./about";
import ContactForm from "./contactform";
import Domaine from "./domain";
import Footer from "./footer";
import HeroAbout from "./heroAbout";
import Navbar from "./navbar";


export default function Propo(){
    return(
        <div>
            <Navbar/>
            <HeroAbout/>
            <About/>
            <Domaine/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}