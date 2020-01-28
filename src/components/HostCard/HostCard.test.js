import React from 'react';
import { shallow } from 'enzyme';
import HostCard from './HostCard';
import { findByTestAtr } from '../../utils/test-utils';

const setup = (props = {}) => {
    const component = shallow(<HostCard {...props} />);
    return component;
};

describe('HostCard Component', () => {
    let component;
    const mockProps = {
        name: 'name',
        hostsApp: ['host 1', 'host 2', 'host 3']
    }
    beforeEach(() => {
        component = setup(mockProps);
    });
 
    it('should render without errors', () => {
        const wrapper = findByTestAtr(component, 'host-card');
        expect(wrapper.length).toBe(1);
    });

    
});
