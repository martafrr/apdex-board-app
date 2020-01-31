import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import HostCard from './index';

describe('HostCard Component', () => {
    let component;
    const mockProps = {
        name: 'name',
        hostsApp: ['host 1', 'host 2', 'host 3']
    }

    beforeEach(() => {
        component = shallow(<HostCard {...mockProps} />);

    });
    it('matches the snapshot', () => {
        component = create(
            <BrowserRouter>
                <HostCard {...mockProps} />
            </BrowserRouter>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });
});
