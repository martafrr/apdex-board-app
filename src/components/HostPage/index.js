import React, { Component } from "react";
import { connect } from 'react-redux';
import { hostsSelector, hostSelector } from '../../store/selectors/hostsSelectors';

class HostPage extends Component {
    
    render() {
        const { hosts, host } = this.props;
        const renderInfo = host ? 
            (host.map((app, index) => {
                if(index < 25) {
                    return (
                        <div key={app.name}>
                            <p>{app.apdex} - {app.name}</p>
                        </div>
                    )
                }
                return null;
            }))
        :
        (<div>No host with this name found.</div>);
        console.log('hosts', hosts, 'host', host)
        
        return (
            <div  data-test="host-info">
                {renderInfo}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let name = ownProps.match.params.host_name;
    return {
        hosts: hostsSelector(state),
        host: hostSelector(name, state),
    }
}

export default connect(mapStateToProps)(HostPage);
