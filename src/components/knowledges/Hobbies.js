import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies" >
            <h3>Hobbies</h3>
            <ul>
                <li className="hobby"> 
                    <i className="fas fa-running"></i>
                    <span> Course à pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span> Randonées</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-dumbbell"></i>
                    <span> Sport (Street Workout)</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-film"></i>
                    <span> Film</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-tools"></i>
                    <span> Répartion ordinateur ou téléphone</span>
                </li>
                <li className="hobby">
                    <i className="fab fa-bitcoin"></i>
                    <span> Crypto-monnaies</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;