import React from "react";

const HostCard = ({name, hostsApp}) => {
    const hostCard = {
        background: '#d6d7dc',
        color: '#2c3437',
        fontSize: '14px',
        // TODO: change to dinamic height
        height: '150px',
        padding: '5px 11px',
        margin: '10px',
    }

    const apps = hostsApp.map(app =>
        <div key={app.name}>
            <p>{app.apdex} - {app.name}</p>
        </div>
        
    );
    return (
        <div style={hostCard}>
            <h3>{name}</h3>
            {apps}
        </div>
    )
}

export default HostCard;
