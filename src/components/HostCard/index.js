import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppModal from '../AppModal';

const HostCard = ({ hostsApp, hostName }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalAppInfo, setModalAppInfo] = useState(null)
    const [appsIndex, setAppsIndex] = useState(null)

    const handleClickApp = (e) => {
        const index = e.target.value;
        const clickedApp = hostsApp[index];
        setModalOpen(true);
        setModalAppInfo(clickedApp);
        setAppsIndex(index);
    }
    const handleOnClose = () => {
        setModalOpen(false);
    }

    const hostCardStyles = {
        background: '#d6d7dc',
        fontSize: '14px',
        height: '280px',
        padding: '5px 11px',
        margin: '10px',
    }
    const hostNameStyles = {
        color: '#2c3437',
    }
    const appNameStyles = {
        background: 'none',
        border: 'none',
        fontSize: '13px',
        margin: '7px auto',
        textAlign: 'left',
    }

    const top5Apps = hostsApp.map((app, index) => {
        if(index < 5) {
            return (
                <div key={app.name}>
                    <button 
                        className='openModalButton'
                        style={appNameStyles} 
                        value={index} 
                        onClick={handleClickApp}
                        data-test="open-modal-button"
                    >
                        {app.apdex} - {app.name}
                    </button>
                </div>
            )
        }
        return null;
    });

    return (
        <div style={hostCardStyles} data-test="host-card">
            <Link style={hostNameStyles} to={'/' + hostName}>
                <h3>{hostName}</h3>
            </Link>

            {top5Apps}

            {modalOpen && 
                <AppModal 
                    isOpen={modalOpen}
                    hostName={hostName}
                    appsIndex={appsIndex} 
                    appInfo={modalAppInfo} 
                    onClose={handleOnClose}
                />}
        </div>
    );
}

HostCard.propTypes = {
    hostsApp: PropTypes.array,
    hostName: PropTypes.string,
}

export default HostCard;
