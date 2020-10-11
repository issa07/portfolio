import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="idImage">
                <div className="idContent">
                    <img src="../media/devp1.png" alt="profil-pic" id="profilPic"/>
                    <h3>Issa DEMIRCI</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive" >
                            <i className="fas fa-home" ></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive" >
                            <i className="fas fa-mountain" ></i>
                            <span>competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projets" activeClassName="navActive" >
                            <i className="fas fa-images" ></i>
                            <span>Projets</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive" >
                            <i className="fas fa-address-book" ></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer" >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer" >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer" >
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>

                <div className="signature">
                    <p>FromDev -2020</p>
                </div>
            </div>

        </div>
    );
};

export default Navigation;