import React from 'react';
import { connect } from 'react-redux';
import { removeAppFromHost } from '../../store/actions';
import { 
    modalStyles,
    modalCloseButtonStyles, 
    modalRemoveButtonStyles,
} from './appModalStyles';

const AppModal = ({ appInfo, appsIndex, hostName, isOpen, onClose, removeAppFromHost }) => {
    const contributors = appInfo.contributors.join(', ');
    const hostsList = appInfo.host.join(', ');

    const handleOnDelete =  () => {
        onClose();
        removeAppFromHost(appsIndex, appInfo.name, hostName);
    }
    const modalWindow = (
        <div style={modalStyles}>
            <button onClick={onClose} style={modalCloseButtonStyles}>X</button>

            <h3>{appInfo.name}</h3>
            <p>Contributors: {contributors}</p>
            <p>Version: {appInfo.version}</p>
            <p>Apdex: {appInfo.version}</p>
            <p>App hosted in: {hostsList}</p>

            <button 
                style={modalRemoveButtonStyles}
                onClick={handleOnDelete}
            >
                Delete App
            </button>
        </div>
    )
    return  (
        isOpen && modalWindow
    )
    
}

const mapDispatchToProps = (dispatch) => ({
    removeAppFromHost: (indexAppToRemove, name, hostsApp) => { dispatch(removeAppFromHost(indexAppToRemove, name, hostsApp)) },
    // removeAppFromAllHosts: (appInfo) => { dispatch(removeAppFromAllHosts(appInfo)) },
});

export default connect(null, mapDispatchToProps)(AppModal);