import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0751410676">
                                <span className="clickInput" 
                                onClick={() => {alert("Numero de telephone copie !"); }} 
                                > 0751410676 </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope-square"></i>
                            <CopyToClipboard text="issa.demirci@epitech.eu">
                                <span className="clickInput" 
                                onClick={() => {alert("Email copie !"); }} 
                                > issa.demirci@epitech.eu </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                <ul>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" >
                        <h4>linkedin</h4>
                        <i className="fab fa-linkedin"></i>
                    </a>
                
                    <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer" >
                        <h4>GitHub</h4>
                        <i className="fab fa-github"></i>
                    </a>
                
                    <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer" >
                        <h4>Twitter</h4>
                        <i className="fab fa-twitter"></i>
                    </a>
                
                    <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer" >
                        <h4>Codepen</h4>
                        <i className="fab fa-codepen"></i>
                    </a>
                
                </ul>
                </div>
            </div> 
        </div>
    );
};

export default Contact;