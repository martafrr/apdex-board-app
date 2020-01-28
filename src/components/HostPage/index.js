import React, { Component } from "react";
import { connect } from 'react-redux';
import { hostSelector } from '../../store/selectors/hostsSelectors';
import { 
    hostCardStyles,
    appListStyles,
    appStyles,
    buttonsContainer,
    buttonStyles,
} from './stylesHostPage';

class HostPage extends Component {
    getTopAppsByHost() {
        return this.props.hostInfo.map((app, index) => {
            if(index < 25) {
                return (
                    <li style={appStyles} key={app.name}>
                        <p>{app.apdex} - {app.name}</p>
                    </li>
                )
            }
            return null;
        })
    }

    render() {
        const { hostInfo } = this.props;
        const hostName = this.props.match.params.host_name;
        const appList = hostInfo ? 
            (this.getTopAppsByHost())
        :
        (<div>No host with this name found.</div>);
        
        return (
            <div style={hostCardStyles} data-test="host-info">
                <div style={buttonsContainer}>
                    <button style={buttonStyles}>
                        Add App in this Host
                    </button>
                    <button style={buttonStyles}>
                        Edit Hosts Apps
                    </button>
                </div>
                <ul style={appListStyles}>
                    <h3>{hostName}</h3>
                    {appList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let name = ownProps.match.params.host_name;

    return {
        hostInfo: hostSelector(name, state),
    }
}

export default connect(mapStateToProps)(HostPage);
