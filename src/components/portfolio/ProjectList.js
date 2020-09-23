import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

export default class ProjectList extends Component {

    state = {
        projects:portfolioData,
        radios: [
            {id: 1, value: "Html"},
            {id: 2, value: "Css"},
            {id: 3, value: "PHP"},
            {id: 4, value: "Javascript"},
            {id: 5, value: "React"},
            {id: 6, value: "Laravel"},
        ],

        selectedRadio: 'Javascript'
    };

    handleRadio = (event) => {
        // console.log(event.target.value);
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {projects, radios, selectedRadio} = this.state; // Cette ligne appelle "state"
        // console.log(projects);

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radios) => {
                            return (
                                <li key={radios.id}>
                                    <input 
                                    type="radio" 
                                    name="radio" 
                                    checked={radios.value === selectedRadio}
                                    value={radios.value}
                                    id={radios.value}
                                    onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radios.value}>
                                        {radios.value}
                                    </label>

                                </li>
                            )
                        })
                    }
                </ul> 

                <div className="projects">
                    {
                        projects
                        .filter(item => item.languages.includes(selectedRadio))
                        .map(item => {

                            return (
                                <Project 
                                key={item.id}
                                item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

