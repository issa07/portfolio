import React from 'react';
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import OtherSkill from '../components/knowledges/OtherSkill';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkill />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;