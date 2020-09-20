import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.1},
            {id: 2, value: "PHP", xp:1.2},
            {id: 3, value: "HTML/CSS", xp:1.6}
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.3},
            {id: 2, value: "Laravel", xp:0.25},
            {id: 3, value: "Symfony", xp:0.2},
            {id: 4, value: "Boostrap", xp:1.2},
            {id: 5, value: "Sass", xp:0.5},
            {id: 6, value: "JQuery", xp:1.2},
        ]
    }
    
    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFramework">
                <ProgressBar 
                languages={languages}
                className="languagesDisplay" 
                title="languages"
                 />

                <ProgressBar 
                languages={frameworks}
                className="frameworksDisplay"
                title="frameworks & bibliothèques"
                />
            </div>
        );
    }
}

export default Languages;