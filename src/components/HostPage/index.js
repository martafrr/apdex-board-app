import React, { Component } from "react";
import { connect } from 'react-redux';
import { SubmissionError, reset } from 'redux-form';
import AddAppForm from './AddAppForm';
import { hostSelector } from '../../store/selectors/hostsSelectors';
import { 
    hostCardStyles,
    appListStyles,
    appStyles,
    buttonsContainer,
    buttonStyles,
} from './stylesHostPage';
import { addAppToHost } from '../../store/actions';

class HostPage extends Component {
    state = {
        isAddAppFormVisible: false,
        isEditAppFormVisible: false,
    }

    toggleAddForm = (e) => {
        this.setState({
            isAddAppFormVisible: !this.state.isAddAppFormVisible
        });
    }

    handleAddAppForm = ({ name='', contributors=[''], version='', apdex='', hosts=[''] }) => {
        const error = {};
        let isError = false;
        
        if(name.trim() === '') {
            error.name = 'Required';
            isError = true;
        }
        if(contributors.trim() === '') {
            error.contributors = 'Required';
            isError = true;
        }
        if(version.trim() === '') {
            error.version = 'Required';
            isError = true;
        }
        if(apdex.trim() === '') {
            error.apdex = 'Required';
            isError = true;
        }
        if(hosts.trim() === '') {
            error.hosts = 'Required';
            isError = true;
        }
    
        if(isError) {
            throw new SubmissionError(error);
        }
        
        const hostName = this.props.match.params.host_name;
        this.props.addAppToHost({
            name,
            contributors: contributors.split(','),
            version,
            apdex,
            host: hosts.split(','),
        }, hostName);
        this.props.clearForm();
    }

    handleEditClick = () => {
        this.setState({
            isEditAppFormVisible: !this.state.isEditAppFormVisible
        });
    }
    
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
                <ul style={appListStyles}>
                    <h3>{hostName}</h3>
                    {appList}
                </ul>
                <div style={buttonsContainer}>
                    <button style={buttonStyles} onClick={this.toggleAddForm}>
                        {!this.state.isAddAppFormVisible ? 
                            'Add App in this Host' :
                            'Hide Form'
                        }
                    </button>
                </div>
                {this.state.isAddAppFormVisible && <div>
                    <AddAppForm onSubmit={this.handleAddAppForm}/>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let name = ownProps.match.params.host_name;

    return {
        hostInfo: hostSelector(name, state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    addAppToHost: (appInfo, hostName) => { dispatch(addAppToHost(appInfo, hostName)) },
    clearForm: () => dispatch(reset('addAppForm')),
});

export default connect(mapStateToProps, mapDispatchToProps)(HostPage);
