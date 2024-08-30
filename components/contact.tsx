import ContactForm from "./contactform";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";


export default function Contact(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}