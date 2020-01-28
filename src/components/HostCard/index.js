import React from "react";
import { Link } from 'react-router-dom';

const HostCard = ({ name, hostsApp }) => {
    const hostCard = {
        background: '#d6d7dc',
        fontSize: '14px',
        height: '280px',
        padding: '5px 11px',
        margin: '10px',
    }
    const hostName = {
        color: '#2c3437',
    }

    const top5Apps = hostsApp.map((app, index) => {
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
            <Link style={hostName} to={'/' + name}>
                <h3>{name}</h3>
            </Link>
            {top5Apps}
        </div>
    )
}

export default HostCard;
