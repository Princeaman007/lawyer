import Link from "next/link";
import Navbar from "./navbar";
import Hero from "./hero";
import Domaine from "./domain";
import Footer from "./footer";
import ContactForm from "./contactform";


export default function Services(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Domaine/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}