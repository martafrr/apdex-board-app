import React from 'react';
import { connect } from 'react-redux';
import { removeAppFromHost, removeAppFromAllHosts } from '../../store/actions/hostActions';
import { 
    modalStyles,
    modalCloseButtonStyles, 
    buttonsWrapperStyles,
    modalRemoveButtonStyles,
} from './appModalStyles';

const AppModal = ({ 
        appInfo,
        appsIndex, 
        hostName, 
        isOpen, 
        onClose, 
        removeAppFromHostOnly,
        removeAppFromAllHosts, 
}) => {
    const contributors = appInfo.contributors.join(',');
    const hostsList = appInfo.host.join(', ');

    const onDeleteThisHostOnly =  () => {
        onClose();
        removeAppFromHostOnly(appsIndex, appInfo.name, hostName);
    }
    const onDeleteAllHosts =  () => {
        onClose();
        removeAppFromAllHosts(appsIndex, appInfo.name, hostName);
    }

    const modalWindow = (
        <div style={modalStyles}>
            <button onClick={onClose} style={modalCloseButtonStyles}>
                X
            </button>

            <h3>{appInfo.name}</h3>
            <p>Contributors: {contributors}</p>
            <p>Version: {appInfo.version}</p>
            <p>Apdex: {appInfo.version}</p>
            <p>App hosted in: {hostsList}</p>

            <div style={buttonsWrapperStyles}>
                <button 
                    style={modalRemoveButtonStyles}
                    onClick={onDeleteThisHostOnly}
                >
                    Delete app on this host only
                </button>
                <button 
                    style={modalRemoveButtonStyles}
                    onClick={onDeleteAllHosts}
                >
                    Delete app on all hosts
                </button>
            </div>
        </div>
    )
    return  (
        isOpen && modalWindow
    )
    
}

const mapDispatchToProps = (dispatch) => ({
    removeAppFromHostOnly: (indexAppToRemove, name, hostsApp) => { dispatch(removeAppFromHost(indexAppToRemove, name, hostsApp)) },
    removeAppFromAllHosts: (appInfo) => { dispatch(removeAppFromAllHosts(appInfo)) },
});

export default connect(null, mapDispatchToProps)(AppModal);