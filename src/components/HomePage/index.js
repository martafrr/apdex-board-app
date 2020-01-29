import React, { Component } from "react";
import { connect } from 'react-redux';
import { hostsSelector } from '../../store/selectors/hostsSelectors';
import HostCard from '../HostCard';
import { Column, Row } from '../../grid/Grid';

export class HomePage extends Component {
    render() {
        const { hosts } = this.props;
        
        const homePageStyles = {
            margin: '20px'
        }

        const hostsCards = () => {
            const hostsArr = [];
            for(let host in hosts) {
                hostsArr.push(
                    <Column xs="12" sm="6" key={host}>
                        <HostCard key={host} hostName={host} hostsApp={hosts[host]}/>
                    </Column>
                );
            }
            return hostsArr;
        }
        const hostsArr = hostsCards();
        return (
            <div style={homePageStyles} data-test="home-page">
                <Row>
                    {hostsArr}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hosts: hostsSelector(state),
});

export default connect(mapStateToProps)(HomePage);
