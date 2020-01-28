import React from "react";
import { Link } from 'react-router-dom';

const HostCard = ({ name, hostsApp }) => {
    const hostCard = {
        background: '#d6d7dc',
        color: '#2c3437',
        fontSize: '14px',
        height: '280px',
        padding: '5px 11px',
        margin: '10px',
    }

    const appsList = hostsApp.map((app, index) => {
        if(index < 5) {
            return (
                <div key={app.name}>
                    <p>{app.apdex} - {app.name}</p>
                </div>
            )
        }
        return null;
    });
    
    return (
        <div style={hostCard} data-test="host-card">
            <Link to={'/' + name}>
                <h3>{name}</h3>
            </Link>
            {appsList}
        </div>
    )
}

export default HostCard;
