import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeAppFromHost, removeAppFromAllHosts } from '../../store/actions/hostActions';
import { 
    modalStyles,
    modalCloseButtonStyles, 
    buttonsWrapperStyles,
    modalRemoveButtonStyles,
} from './appModalStyles';

export const AppModal = ({
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
        removeAppFromHostOnly(appsIndex, hostName);
    }
    const onDeleteAllHosts =  () => {
        onClose();
        removeAppFromAllHosts(appInfo.name);
    }

    const modalWindow = (
        <div style={modalStyles} data-test="modal-window">
            <button 
                onClick={onClose} 
                style={modalCloseButtonStyles}
                data-test="close-modal-button"
            >
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
                    data-test="remove-host-only-button"
                >
                    Delete app on this host only
                </button>
                <button 
                    style={modalRemoveButtonStyles}
                    onClick={onDeleteAllHosts}
                    data-test="remove-all-hosts-button"
                >
                    Delete app on all hosts
                </button>
            </div>
        </div>
    )
    return  (
        isOpen && modalWindow
    );
}

const mapDispatchToProps = (dispatch) => ({
    removeAppFromHostOnly: (indexAppToRemove, hostsApp) => { dispatch(removeAppFromHost(indexAppToRemove, hostsApp)) },
    removeAppFromAllHosts: (appName) => { dispatch(removeAppFromAllHosts(appName)) },
});

AppModal.propTypes = {
    appInfo: PropTypes.object,
    appsIndex: PropTypes.string, 
    hostName: PropTypes.string, 
    isOpen: PropTypes.bool, 
    onClose: PropTypes.func,
	removeAppFromHostOnly: PropTypes.func,
    removeAppFromAllHosts: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(AppModal);