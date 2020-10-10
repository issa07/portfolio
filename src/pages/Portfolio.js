import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';

const Projets = () => {
    return (
        <div className="portfolio">
            <Navigation />
            <ProjectList />
            C'est les projets 
        </div>
    );
};

export default Projets;