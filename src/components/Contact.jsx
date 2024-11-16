import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin, BsInstagram, BsWhatsapp} from 'react-icons/bs'; 

const Contact = () => {
    return (
        <section id="Contact" className="h-screen flex-col bg-pink-400 justify-center items-center">
            <div className="contact-content mb-52">
                <h1>"Contact Me"</h1>
                <div className="contact-sci">
                    <a href="https://www.linkedin.com/in/nisa-ardila-296211310" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                    <a href="https://instagram.com/nisardila_" target="_blank" rel="noopener noreferrer">
                        <BsInstagram />
                    </a>
                    <a href="https://github.com/NisaArdila" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare />
                    </a>
                    <a href="https://wa.me/6285854580426" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;