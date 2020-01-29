import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AppModal from '../AppModal';

class HostCard extends Component {
    state = {
        modalOpen: false,
        modalAppInfo: null,
        appsIndex: null,
    }

    handleClickApp = (e) => {
        const index = e.target.value;
        const clickedApp = this.props.hostsApp[index];
        this.setState({
            modalOpen: true,
            modalAppInfo: clickedApp, 
            appsIndex: index,
        });
    }
    handleOnClose = () => {
        this.setState({ modalOpen: false })
    }

    render () { 
        const { hostsApp, hostName } = this.props;
        const hostCard = {
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
                        <button style={appNameStyles} value={index} onClick={this.handleClickApp}>
                            {app.apdex} - {app.name}
                        </button>
                    </div>
                )
            }
            return null;
        });

        return (
            <div style={hostCard} data-test="host-card">
                <Link style={hostNameStyles} to={'/' + hostName}>
                    <h3>{hostName}</h3>
                </Link>

                {top5Apps}

                {this.state.modalOpen && 
                    <AppModal 
                        isOpen={this.state.modalOpen}
                        hostName={hostName}
                        appsIndex={this.state.appsIndex} 
                        appInfo={this.state.modalAppInfo} 
                        onClose={this.handleOnClose}
                    />}
            </div>
        );
    }
}

export default HostCard;
